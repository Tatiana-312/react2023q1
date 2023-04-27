import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Data } from '../pages/Home/data.interface';
import { ApiResponse } from './apiResponse.interface';
import { buildCreateApi, coreModule, reactHooksModule } from '@reduxjs/toolkit/query/react';

const createApi = buildCreateApi(
  coreModule(),
  reactHooksModule({ unstable__sideEffectsInRender: true })
);

export const rickAndMortyApi = createApi({
  reducerPath: 'rickAndMortyApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/' }),
  endpoints: (builder) => ({
    getCharacters: builder.query<ApiResponse, string>({
      query: (name = '') => `character/?name=${name}`,
    }),
    getCharacterById: builder.query<Data, number>({
      query: (id) => `character/${id}`,
    }),
  }),
});

export const { useGetCharactersQuery, useGetCharacterByIdQuery } = rickAndMortyApi;
