import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/Auth/authSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
  },
});
