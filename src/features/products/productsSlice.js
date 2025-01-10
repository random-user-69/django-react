import { apiSlice } from "../api/apiSlice";

export const productsSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (search) => {
        const params = search ? `?search=${search}` : "";
        return {
          url: `products/${params}`,
        };
      },
      keepUnusedDataFor: 20,
    }),
    getProduct: builder.query({
      query: (id) => `/products/${id}/`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductQuery } = productsSlice;
