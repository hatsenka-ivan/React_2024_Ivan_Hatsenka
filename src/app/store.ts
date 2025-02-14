import { configureStore } from "@reduxjs/toolkit";
import dishesReducer from "../features/dishes/dishesSlice";
import { menuApi } from "../features/menuApi/menuApiSlice";
import userReducer from "../features/user/userSlice";

export const store = configureStore({
  reducer: {
    dishes: dishesReducer,
    user: userReducer,
    [menuApi.reducerPath]: menuApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(menuApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
