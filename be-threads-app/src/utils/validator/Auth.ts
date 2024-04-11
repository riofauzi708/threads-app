import Joi = require("joi");

export const registerSchema = Joi.object({
    full_name: Joi.string().required(),
    username: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(3).required(),
});

export const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(3).required(),
});