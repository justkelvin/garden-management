import { Customer, UserRole } from "@prisma/client";
import prisma from "../../../shared/prisma";
import { create } from "./patientService";
import { IUpload } from "../../../interfaces/file";
import { Request } from "express";
import { CloudinaryHelper } from "../../../helpers/uploadHelper";
import ApiError from "../../../errors/apiError";
import httpStatus from "http-status";
const createPatient = async (payload: any): Promise<any> => {
    const result = await create(payload)
    return result;
}

const getAllPatients = async (): Promise<Customer[] | null> => {
    const result = await prisma.customer.findMany();
    return result;
}

const getPatient = async (id: string): Promise<Customer | null> => {
    const result = await prisma.customer.findUnique({
        where: {
            id: id
        }
    });
    return result;
}

const deletePatient = async (id: string): Promise<any> => {
    const result = await prisma.$transaction(async (tx) => {
        const customer = await tx.customer.delete({
            where: {
                id: id
            }
        });
        await tx.auth.delete({
            where: {
                email: customer.email
            }
        })
    });
    return result;
}

// : Promise<Customer>
const updatePatient = async (req: Request): Promise<Customer | null> => {
    const file = req.file as IUpload;
    const id = req.params.id as string;
    const user = JSON.parse(req.body.data)
    if (file) {
        const uploadImage = await CloudinaryHelper.uploadFile(file);
        if (uploadImage) {
            user.img = uploadImage.secure_url
        } else {
            throw new ApiError(httpStatus.EXPECTATION_FAILED, 'Failed to updateImage !!')
        }
    }
    const result = await prisma.customer.update({
        where: { id },
        data: user
    })
    return result;
}

export const PatientService = {
    createPatient,
    updatePatient,
    getPatient,
    getAllPatients,
    deletePatient
}