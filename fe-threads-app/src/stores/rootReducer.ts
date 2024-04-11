import { combineReducers } from "@reduxjs/toolkit";
import { authSlice } from "./slice/authSlice";

export const {AUTH_LOGIN, AUTH_CHECK, LOGOUT, AUTH_ERROR} = authSlice.actions;

export const authReducer = authSlice.reducer;

const rootReducer = combineReducers({
    auth: authReducer
});

export default rootReducer;