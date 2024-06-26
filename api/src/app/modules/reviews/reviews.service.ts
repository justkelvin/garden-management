import { Reviews } from "@prisma/client";
import prisma from "../../../shared/prisma";
import ApiError from "../../../errors/apiError";
import httpStatus from "http-status";
import calculatePagination, { IOption } from "../../../shared/paginationHelper";

const create = async (user: any, payload: Reviews): Promise<Reviews> => {
    const isUserExist = await prisma.customer.findUnique({
        where: {
            id: user.userId
        }
    })
    if (!isUserExist) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Customer Account is not found !!')
    }
    const isDoctorExist = await prisma.gardener.findUnique({
        where: {
            id: payload.gardenerId
        }
    })
    if(isUserExist){
        payload.customerId = isUserExist.id;
    }
    if (!isDoctorExist) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Gardener Account is not found !!')
    }
    const result = await prisma.reviews.create({
        data: payload
    })
    return result
}

const getAllReviews = async (options: IOption): Promise<Reviews[] | null> => {
    const limit = Number(options.limit) || 10;
    const result = await prisma.reviews.findMany({
        take: limit,
        include: {
            gardener: {
                select: {
                    firstName: true,
                    lastName: true,
                    img: true
                }
            },
            customer: {
                select: {
                    firstName: true,
                    lastName: true,
                    img: true
                }
            }
        }
    });
    return result;
}

const getSingleReview = async (id: string): Promise<Reviews | null> => {
    const result = await prisma.reviews.findUnique({
        where: {
            id: id
        },
        include: {
            gardener: {
                select: {
                    firstName: true,
                    lastName: true
                }
            },
            customer: {
                select: {
                    firstName: true,
                    lastName: true
                }
            }
        }
    });
    return result;
}

const getDoctorReviews = async (id: string): Promise<Reviews[] | null> => {
    const isUserExist = await prisma.gardener.findUnique({
        where: {
            id: id
        }
    })
    if (!isUserExist) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Gardener Account is not found !!')
    }
    const result = await prisma.reviews.findMany({
        where: {
            gardenerId: isUserExist.id
        },
        include: {
            gardener: {
                select: {
                    firstName: true,
                    lastName: true
                }
            },
            customer: {
                select: {
                    firstName: true,
                    lastName: true
                }
            }
        }
    });
    return result;
}

const deleteReviews = async (id: string): Promise<Reviews> => {
    const result = await prisma.reviews.delete({
        where: {
            id: id
        }
    });
    return result;
}

const updateReview = async (id: string, payload: Partial<Reviews>): Promise<Reviews> => {
    const result = await prisma.reviews.update({
        data: payload,
        where: {
            id: id
        }
    })
    return result;
}

const replyReviewByDoctor = async (user: any, id: string, payload: Partial<Reviews>): Promise<Reviews> => {
    const isUserExist = await prisma.gardener.findUnique({
        where: {
            id: user.userId
        }
    })
    if (!isUserExist) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Gardener Account is not found !!')
    }

    const result = await prisma.reviews.update({
        data: {
            response: payload.response
        },
        where: {
            id: id
        }
    })
    return result;
}


export const ReviewService = {
    create,
    getAllReviews,
    getDoctorReviews,
    deleteReviews,
    updateReview,
    getSingleReview,
    replyReviewByDoctor
}