import express from "express";
import { listing } from "../Controllers/Listing.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();


router.post("/create",verifyToken,listing)


export default router