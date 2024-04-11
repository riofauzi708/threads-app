import { NextFunction, Response } from "express";
import * as jwt from 'jsonwebtoken';

export default new class AuthenticationMiddlewares {
    Auth(req: any, res: any, next: NextFunction ) : Response {
        try {
            const authorizationHeaders = req.headers.authorization;
            if (!authorizationHeaders || !authorizationHeaders.startsWith("Bearer ")) 
                return res.status(401).json({ error: "Unauthorized" });

            const token = authorizationHeaders.split(" ")[1];

        try {
            res.locals.loginSession = jwt.verify(token, process.env.SECRET_KEY);
            next();
        } catch (error) {
            return res.status(401).json({ error: "Token invalid" });
        }
        } catch (error) {
            return res.status(401).json({ message: "Unauthorized" });
        }
    }
}   