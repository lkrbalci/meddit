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
    tokenUpdate: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.token = action.payload;
    },
    userIdUpdate: (state, action) => {
      state.userId = action.payload;
    },
    errorUpdate: (state, action) => {
      state.error = action.payload;
    },
    loadingUpdate: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const {
  tokenUpdate,
  userIdUpdate,
  errorUpdate,
  loadingUpdate,
} = authSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.auth.value)`
//export const selectCount = (state) => state.auth.value;

export default authSlice.reducer;
