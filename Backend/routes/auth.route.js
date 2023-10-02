import express from "express";
import { signUpAuth } from "../Controllers/Auth.controller.js";

const router = express.Router();

router.post("/signup", signUpAuth);

export default router;
