import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    fetchUsers: builder.query({
      query: () => "/users",
    }),
  }),
});

export const { useFetchUsersQuery } = userApi;
