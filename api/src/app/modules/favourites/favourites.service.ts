import { Appointments, Favourites } from "@prisma/client";
import prisma from "../../../shared/prisma";
import ApiError from "../../../errors/apiError";
import httpStatus from "http-status";

const createFavourite = async (user: any, payload: Favourites): Promise<Favourites> => {
    const isUserExist = await prisma.customer.findUnique({
        where: {
            id: user.userId
        }
    })
    if (!isUserExist) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Customer Account is not found !!')
    }

    //check already have or not
    const isFavourite = await prisma.favourites.findFirst({
        where: {
            gardenerId: payload.gardenerId
        }
    });

    if (isFavourite) {
        throw new ApiError(httpStatus.NOT_FOUND, 'AllReady gardener is Favourite !!')
    } else {
        payload.customerId = isUserExist.id;
        const favourites = await prisma.favourites.create({
            data: payload
        });
        return favourites;
    }
}
const removeFavourite = async (user: any, payload: Favourites): Promise<Favourites> => {
    const isUserExist = await prisma.customer.findUnique({
        where: {
            id: user.userId
        }
    })
    if (!isUserExist) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Customer Account is not found !!')
    }

    //check already have or not
    const isFavourite = await prisma.favourites.findFirst({
        where: {
            gardenerId: payload.gardenerId
        }
    });
    if(!isFavourite){
        throw new ApiError(httpStatus.NOT_FOUND, 'Gardener is not in Favourite !!')
    }else{
        const favourites = await prisma.favourites.delete({
            where: {
                id: isFavourite.id
            }
        })
        return favourites;
    }
}

const getPatientFavourites = async (user: any): Promise<Favourites[]> => {
    const isUserExist = await prisma.customer.findUnique({
        where: {
            id: user.userId
        }
    })
    if (!isUserExist) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Customer Account is not found !!')
    }

    const favourites = await prisma.favourites.findMany({
        where: {
            customerId: isUserExist.id
        },
        include: {
            gardener: true
        }
    })
    return favourites;
}


export const FavouritesService = {
    createFavourite,
    removeFavourite,
    getPatientFavourites
}