import { apiSlice } from "../api/apiSlice";

export const categoriesSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => "categories/",
    }),
  }),
});

export const { useGetCategoriesQuery } = categoriesSlice;
