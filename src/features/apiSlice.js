import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com" }),
  endpoints: (builder) => ({
    getProductsById: builder.query({
      query: (productId) => `products/${productId}`,
    }),
  }),
});

export const { useGetProductsByIdQuery } = api;
