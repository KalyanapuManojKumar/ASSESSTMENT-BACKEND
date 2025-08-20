import express from "express";
import {
  GetQuestions,
  SubmitExam,
} from "../controllers/questions.controller.js";
import authenticate from "../middleware/auth.middleware.js";
const questionsRoute = express.Router();

questionsRoute.use(authenticate);
questionsRoute.get("/questions", GetQuestions);
questionsRoute.post("/submit", SubmitExam);

export default questionsRoute;
