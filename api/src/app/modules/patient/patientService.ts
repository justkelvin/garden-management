import httpStatus from "http-status";
import ApiError from "../../../errors/apiError";
import prisma from "../../../shared/prisma";
import { UserRole } from "@prisma/client";
import bcrypt from 'bcrypt';

export const create = async (payload: any): Promise<any> => {
    try {
        const data = await prisma.$transaction(async (tx) => {
            const { password, ...othersData } = payload;

            const customer = await tx.customer.create({
                data: othersData,
            });

            if (customer) {
                // Check Email existing
                const existEmail = await tx.auth.findUnique({ where: { email: customer.email } });
                if (existEmail) {
                    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, "Email Already Exist !!")
                } else {
                    const auth = await tx.auth.create({
                        data: {
                            email: customer.email,
                            password: password && await bcrypt.hashSync(password, 12),
                            role: UserRole.customer,
                            userId: customer.id
                        },
                    });
                    return {
                        customer,
                        auth,
                    };
                }
            }
        });

        return data;
    } catch (error: any) {
        throw new ApiError(httpStatus.BAD_REQUEST, error.message)
    }
};