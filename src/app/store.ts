import { configureStore } from "@reduxjs/toolkit";
import dishesReducer from "../features/dishes/dishesSlice";
import { menuApi } from "../features/menuApi/menuApiSlice";

export const store = configureStore({
  reducer: {
    dishes: dishesReducer,
    [menuApi.reducerPath]: menuApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(menuApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
