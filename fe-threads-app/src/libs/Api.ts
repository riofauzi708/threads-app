import axios from "axios";

export const APIConfig = axios.create({
    baseURL: "http://localhost:5000/api/v1",
});

export const setAuthToken = (token: string) : void => {
    if (token) {
        APIConfig.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
        delete APIConfig.defaults.headers.common["Authorization"];
    }
}

