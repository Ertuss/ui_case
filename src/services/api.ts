import { createApi } from "@reduxjs/toolkit/query/react";
import { customFetchBaseQuery } from "./customFetchBaseQuery";
import GetCharactersResponseDTO from "../types/GetCharactersResponseDTO";
import GetCharactersRequestDTO from "../types/GetCharactersRequestDTO";

export const api = createApi({
    reducerPath: "api",
    baseQuery: customFetchBaseQuery,
    endpoints: (builder) => ({
        getCharacters: builder.query<GetCharactersResponseDTO, GetCharactersRequestDTO>({
            query: (arg) => ({
                url: "character",
                params: { ...arg },
                method: "GET"
            })
        })
    })
});


export const {
    useLazyGetCharactersQuery
} = api;