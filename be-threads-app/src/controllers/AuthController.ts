import { Request, Response } from "express";
import { loginSchema, registerSchema } from "../utils/validator/Auth";
import AuthService from "../services/AuthService";
import * as bcrypt from 'bcrypt';
import AuthUserService from "../services/AuthUserService";
import * as jwt from 'jsonwebtoken';

export default new class AuthController {
    async register(req: Request, res: Response) : Promise<Response> {
        try {
            const data = req.body;

            const {error, value} = registerSchema.validate(data);
            if (error) 
                return res.status(422).json({
                    message: error.details[0].message
                })

            const hashedPassword = await bcrypt.hash(value.password, 10);
            value.password = hashedPassword;
            
            console.log(value);
            console.log(hashedPassword);
            
            
            const response = await AuthService.register(value);
            console.log(response);
            

            return res.status(201).json({
                data: response
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({error: "Internal server error"})
        }
    }

    async login(req: Request, res: Response) : Promise<Response> {
        try {
            const data = req.body;

            const {error, value} = loginSchema.validate(data);
            if (error) return res.status(422).json({
                    message: error.details[0].message
                })

            const getUser = await AuthUserService.getUser(value.email);
            
            
            if (!getUser) return res.status(400).json({
                    message: "Email not registered"
                })

            const isCheckPassword = await bcrypt.compare(value.password, getUser.password);
            
            if (!isCheckPassword)  
                return res.status(400).json({
                    message: "Password is wrong"
                })

                const user = {
                    id: getUser.id,
                    full_name: getUser.full_name,
                    username: getUser.username,
                    email: getUser.email,
                }

                const accessToken = jwt.sign(user, process.env.SECRET_KEY, { expiresIn: "1h" });
                
            
            return res.status(200).json({
                data: user, accessToken
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({error: "Internal server error"})
        }
    }

    async check(req: Request, res: Response) : Promise<Response> {
        try {
            const loginSession = res.locals.loginSession;

            const response = await AuthService.check(loginSession);
            
            return res.status(200).json(
                response
            );
        } catch (error) {
            console.error(error);
            return res.status(500).json({error: "Internal server error"})
        }
    }
}