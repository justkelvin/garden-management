import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { PatientService } from "./patient.service";
import { Customer } from "@prisma/client";

const createPatient = catchAsync(async (req: Request, res: Response) => {
    await PatientService.createPatient(req.body);
    sendResponse(res, {
        statusCode: 200,
        message: 'Successfully Customer Created !!',
        success: true
    })
})

const getAllPatients = catchAsync(async (req: Request, res: Response) => {
    const result = await PatientService.getAllPatients();
    sendResponse<Customer[]>(res, {
        statusCode: 200,
        message: 'Successfully Get Customer !!',
        success: true,
        data: result,
    })
})

const getPatient = catchAsync(async (req: Request, res: Response) => {
    const result = await PatientService.getPatient(req.params.id);
    sendResponse<Customer>(res, {
        statusCode: 200,
        message: 'Successfully Get Customer !!',
        success: true,
        data: result,
    })
})

const deletePatient = catchAsync(async (req: Request, res: Response) => {
    const result = await PatientService.deletePatient(req.params.id);
    sendResponse<Customer>(res, {
        statusCode: 200,
        message: 'Successfully Deleted Customer !!',
        success: true,
        data: result,
    })
})

const updatePatient = catchAsync(async (req: Request, res: Response) => {
    const result = await PatientService.updatePatient(req);
    sendResponse<Customer>(res, {
        statusCode: 200,
        message: 'Successfully Updated Customer !!',
        success: true,
        data: result
    })
})

export const PatientController = {
    createPatient,
    updatePatient,
    getPatient,
    getAllPatients,
    deletePatient,
}