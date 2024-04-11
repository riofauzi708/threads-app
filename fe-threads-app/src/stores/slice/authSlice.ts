import { setAuthToken } from "@/libs/Api";
import { IAuth } from "@/utils/interface/IUserAuth";
import {createSlice} from "@reduxjs/toolkit";

    const initialAuthState: IAuth = {
        id: 0,
        email: "",
        full_name: "",
        username: ""
    }

export const authSlice = createSlice({
    name: "auth",
    initialState: initialAuthState,
    reducers: {
        AUTH_LOGIN: (_, action) => {
            const { data, accessToken } = action.payload
            localStorage.setItem("accessToken", accessToken)

            setAuthToken(accessToken)
            const user = {
                id: data.id,
                email: data.email,
                full_name: data.full_name,
                username: data.username
            }
            
            return user
        },
        AUTH_CHECK: (_state, action) => {
            console.log(action);
        },
        LOGOUT: () => {
            localStorage.removeItem("accessToken")
        },
        AUTH_ERROR: () => {
            localStorage.removeItem("accessToken")
    }}
})