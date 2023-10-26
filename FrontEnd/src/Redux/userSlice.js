import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
};

export const userSlice = createSlice({
  name:'user',
  initialState,
  reducers: {
    loading: (state) => {
      state.loading = true;
    },
    noLoading: (state) => {
      state.loading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loading, noLoading } = userSlice.actions;

export default userSlice.reducer;
