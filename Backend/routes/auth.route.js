import express from "express";
import { signUpAuth } from "../Controllers/SignUp.controller.js";
import { loginAuth } from "../Controllers/Login.controller.js";
import {signOutAuth} from "../Controllers/SignOut.controller.js"

const router = express.Router();

router.post("/signup", signUpAuth);
router.post("/login", loginAuth);
router.get("/signout",signOutAuth)

export default router;
