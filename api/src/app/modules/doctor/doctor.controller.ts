import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { Gardener } from "@prisma/client";
import { DoctorService } from "./doctor.service";
import pick from "../../../shared/pick";
import { IDoctorFiltersData, IDoctorOptions } from "./doctor.interface";

const createDoctor = catchAsync(async (req: Request, res: Response) => {
    const result = await DoctorService.create(req.body);
    sendResponse(res, {
        statusCode: 200,
        message: 'Successfully Gardener Created !!',
        success: true,
        data: result
    })
})

const getAllDoctors = catchAsync(async (req: Request, res: Response) => {
    const filter = pick(req.query, IDoctorFiltersData);
    const options = pick(req.query, IDoctorOptions);
    const result = await DoctorService.getAllDoctors(filter, options);
    sendResponse(res, {
        statusCode: 200,
        message: 'Successfully Retrieve gardeners !!',
        success: true,
        data: result,
    })
})

const getDoctor = catchAsync(async (req: Request, res: Response) => {
    const result = await DoctorService.getDoctor(req.params.id);
    sendResponse<Gardener>(res, {
        statusCode: 200,
        message: 'Successfully Get Gardener !!',
        success: true,
        data: result,
    })
})

const deleteDoctor = catchAsync(async (req: Request, res: Response) => {
    const result = await DoctorService.deleteDoctor(req.params.id);
    sendResponse<Gardener>(res, {
        statusCode: 200,
        message: 'Successfully Deleted Gardener !!',
        success: true,
        data: result,
    })
})

const updateDoctor = catchAsync(async (req: Request, res: Response) => {
    const result = await DoctorService.updateDoctor(req);
    sendResponse<Gardener>(res, {
        statusCode: 200,
        message: 'Successfully Updated Gardener !!',
        success: true,
        data: result,
    })
})

export const DoctorController = {
    createDoctor,
    updateDoctor,
    deleteDoctor,
    getAllDoctors,
    getDoctor
}