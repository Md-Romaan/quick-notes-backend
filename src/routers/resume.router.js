import { Router } from "express";
import { createResume, getResumeByUser } from "../controllers/resume.controller.js";

const resumeRouter = Router();

resumeRouter.route("/").post(createResume);
resumeRouter.route("/:user").get(getResumeByUser);
export default resumeRouter;