import { tagTypes } from "../tag-types"
import { baseApi } from "./baseApi"

const DOC_URL = '/gardener'

export const doctorApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getDoctors: build.query({
            query: (arg) => ({
                url: `${DOC_URL}`,
                method: 'GET',
                params: arg
            }),
            transformResponse: (response) =>{
                return {
                    doctors: response.data,
                    meta: response.meta
                }
            },
            providesTags: [tagTypes.gardener]
        }),
        getDoctor: build.query({
            query: (id) => ({
                url: `${DOC_URL}/${id}`,
                method: 'GET',
            }),
            providesTags: [tagTypes.gardener]
        }),
        updateDoctor: build.mutation({
            query: ({ data, id }) => ({
                url: `${DOC_URL}/${id}`,
                method: 'PATCH',
                data: data,
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }),
            invalidatesTags: [tagTypes.gardener]
        })
    })
})

export const { useGetDoctorsQuery, useGetDoctorQuery, useUpdateDoctorMutation } = doctorApi