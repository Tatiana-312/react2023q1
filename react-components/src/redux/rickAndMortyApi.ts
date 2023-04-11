import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Data } from '../pages/Home/data.interface';
import { ApiResponse } from './apiResponse.interface';

export const rickAndMortyApi = createApi({
  reducerPath: 'rickAndMortyApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/' }),
  endpoints: (builder) => ({
    getCharacterByName: builder.query<ApiResponse, string>({
      query: (name = '') => `character/?name=${name}`,
    }),
  }),
});

export const { useGetCharacterByNameQuery } = rickAndMortyApi;
