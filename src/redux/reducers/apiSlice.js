import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://react-fast-pizza-api.onrender.com/api/',
    }),
    endpoints: (builder) => ({}),
});
