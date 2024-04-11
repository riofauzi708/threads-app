import { Request, Response } from "express";
import express = require("express");
import { AppDataSource } from "./data-source";
import router from "./routes";
import cors = require("cors");
import "dotenv/config"

AppDataSource.initialize()
    .then(async () => {
        const app = express();
        const port = 5000;

        const corsConfig = {
            "origin": "*",
            "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
            "preflightContinue": false,
            "optionsSuccessStatus": 204
        };

        app.use(cors(corsConfig));
        app.use(cors());
        app.use(express.json());
        app.use("/api/v1", router); // This will use the router imported from './routes'

        app.get("/", (req: Request, res: Response) => {
            res.send("Hello World!");
        });

        app.listen(port, () => {
            console.log(`SERVER IS RUNNING ON ${port}`);
        });
    }) 
    .catch((error) => console.log(error));
