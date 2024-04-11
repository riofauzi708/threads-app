import {APIConfig} from "@/libs/Api";
import React from "react";
import { useNavigate } from "react-router-dom";

const useRegister = () => {
    const navigate = useNavigate();
    const [formRegister, setFormRegister] = React.useState({
        full_name: "",
        username: "",
        email: "",
        password: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormRegister({
            ...formRegister,
            [e.target.name]: e.target.value,
        });
    };
    
    const handleSubmit = async () : Promise<void> => {
        try {
            await APIConfig.post("/auth/register", formRegister);
        
            navigate("/auth/login");

        } catch (error) {
            throw error
        }
    };

    return {
        formRegister,
        setFormRegister,
        handleChange,
        handleSubmit,
    };
};

export default useRegister;