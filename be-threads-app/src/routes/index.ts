import * as express from "express";
import ThreadController from "../controllers/ThreadController";
import UserController from "../controllers/UserController";
import AuthController from "../controllers/AuthController";
import AuthenticationMiddlewares from "../middlewares/Auth";

const router = express.Router();

router.get("/threads", ThreadController.find);
router.post("/threads-new", AuthenticationMiddlewares.Auth, ThreadController.create);
router.put("/threads/:id", ThreadController.update);
router.delete("/threads/:id", ThreadController.delete);

router.get("/users", UserController.find);
router.post("/users-new", UserController.create);
router.put("/users/:id", UserController.update);
router.delete("/users/:id", UserController.delete);

router.get("/threads/:id/replies", ThreadController.find);
router.post("/threads/:id/replies-new", ThreadController.create);
router.put("/threads/:id/replies/:id", ThreadController.update);
router.delete("/threads/:id/replies/:id", ThreadController.delete);

//Authentication
router.post("/auth/register", AuthController.register);
router.post("/auth/login", AuthController.login);
router.get("/auth/check", AuthenticationMiddlewares.Auth, AuthController.check);

export default router;