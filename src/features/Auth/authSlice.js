import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    userId: null,
    token: null,
    error: null,
    loading: false,
  },
  reducers: {
    //token to be saved
    tokenUpdate: (state, action) => {
      state.token = action.payload;
    },
    //user id to be saved
    userIdUpdate: (state, action) => {
      state.userId = action.payload;
    },
    //if error returns message to be saved
    errorUpdate: (state, action) => {
      state.error = action.payload;
    },
    //if loading animation to be implemented, loading status to be updated
    loadingUpdate: (state, action) => {
      state.loading = action.payload;
    },
    //log out logic
    logOut: (state) => {
      state.userId = null;
      state.token = null;
      state.error = null;
      state.loading = false;
    },
  },
});

export const {
  tokenUpdate,
  userIdUpdate,
  errorUpdate,
  loadingUpdate,
} = authSlice.actions;

export default authSlice.reducer;
