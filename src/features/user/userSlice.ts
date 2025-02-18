import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type User = {
  email: string;
  isLoggedIn: boolean;
};

const initialState: User = {
  email: "",
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logInUser(state, action: PayloadAction<string>) {
      state.isLoggedIn = true;
      state.email = action.payload;
    },
    logOutUser(state) {
      state.isLoggedIn = false;
      state.email = "";
    },
  },
});

export const { logInUser, logOutUser } = userSlice.actions;
export default userSlice.reducer;
