import {APIConfig, setAuthToken} from "@/libs/Api";
import React from "react";
import { useNavigate } from "react-router-dom";
import { AUTH_LOGIN } from "@/stores/rootReducer";
import { useDispatch } from "react-redux";

const useLogin = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formLogin, setFormLogin] = React.useState({
        email: "",
        password: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormLogin({
            ...formLogin,
            [e.target.name]: e.target.value,
        });
    };
    
    const handleSubmit = async () : Promise<void> => {
        try {
            const response = await APIConfig.post("/auth/login", formLogin);
            dispatch(AUTH_LOGIN(response.data))
            setAuthToken(response.data.accessToken)
            
            navigate("/");
        } catch (error) {
            throw error
        }
    };

    return {
        formLogin,
        setFormLogin,
        handleChange,
        handleSubmit,
    };
};

export default useLogin;