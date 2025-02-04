import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { MenuType } from "../../types/global.types";

export const menuApi = createApi({
  reducerPath: "menuApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1",
  }),
  endpoints: (builder) => ({
    getMenu: builder.query<MenuType[], void>({
      query: () => "/meals",
    }),
  }),
});

export const { useGetMenuQuery } = menuApi;
