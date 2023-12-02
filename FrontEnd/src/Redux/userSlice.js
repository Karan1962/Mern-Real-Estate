import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  loading: false,
  passwordError: false,
  userNameError: false,
  error: null,
  updateSuccess: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    currentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    updateCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
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
    updateFailure: (state, action) => {
      state.error = action.payload;
      state.updateSuccess= false;
    },
    successUpdate: (state) => {
      state.updateSuccess = true;
      state.error = null;
    },
    deleteSuccess: (state) =>{
      state.currentUser = null;
    },
    defaultState:(state)=>{
      state.updateSuccess=null;
      state.error=null;
    }

  },
});

// Action creators are generated for each case reducer function
export const {
  loading,
  noLoading,
  userNameError,
  passwordError,
  noError,
  currentUser,
  updateCurrentUser,
  updateFailure,
  successUpdate,
  defaultState,
  deleteSuccess,
  
} = userSlice.actions;

export default userSlice.reducer;
