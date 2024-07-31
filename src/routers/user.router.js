import express from "express";
import { loginUser, userRegister, verifyToken } from "../controllers/user.controller.js";

//----------->  /user/...
const userRouter = express.Router();

userRouter.route("/register").post(userRegister);
userRouter.route("/login").post(loginUser);
userRouter.route("/verify-token").post(verifyToken);

export default userRouter;