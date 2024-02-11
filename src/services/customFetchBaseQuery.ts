import {BaseQueryFn, FetchArgs, fetchBaseQuery} from "@reduxjs/toolkit/query";

const baseQuery = fetchBaseQuery({
    baseUrl: "https://rickandmortyapi.com/api/"
});

export const customFetchBaseQuery: BaseQueryFn<string | FetchArgs, unknown, unknown> = async (args, api, extraOptions = {}) => {

    const result = await baseQuery(args, api, extraOptions);

    if (result.data) {
        return result;
    } else {

        return {
            error: (result as any).error.data.error ?? "Unexpected error",
        };
    }


};