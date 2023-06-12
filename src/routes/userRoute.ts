import { Router } from "express";
import { createUser, singIn } from "../controllers/userController";
import { signInSchema, createUserSchema } from "../schemas/userSchema";
import { validateBody } from "../middlewares/validationMiddleware";

const usersRoute = Router()

usersRoute.post("/signup", validateBody(createUserSchema), createUser);
usersRoute.post("/signin", validateBody(signInSchema), singIn)

export { usersRoute }