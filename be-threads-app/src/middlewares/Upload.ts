import { NextFunction, Request, Response } from "express";
import * as multer from "multer";
import * as path from "path";

export default new class UploadMiddleware {

    upload(fieldName: string) {
        const storage = multer.diskStorage({
            destination: (req, file, cb) => {
                cb(null, './uploads');
            },
            filename: (req, file, cb) => {
                const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
                cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
            }
        });
        const uploadFile = multer({ storage: storage });

        return (req: Request, res: Response, next: NextFunction) => {
            uploadFile.single(fieldName)(req, res, (err) => {
                if (err) {
                    return res.status(400).json({
                        error: "File upload failed"
                    });
                }

                res.locals.filename = req.file.filename;
                next();
            });
        };
    }

};