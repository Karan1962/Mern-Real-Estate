import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  passwordError: false,
  userNameError: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loading: (state) => {
      state.loading = true;
    },
    noLoading: (state) => {
      state.loading = false;
    },
    passwordError: (state) => {
      state.passwordError = true;
      state.userNameError = false;
    },
    userNameError: (state) => {
      state.userNameError = true;
      state.passwordError = false;
    },
    noError: (state) => {
      state.userNameError = false;
      state.passwordError = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loading, noLoading, userNameError, passwordError,noError } =
  userSlice.actions;

export default userSlice.reducer;
