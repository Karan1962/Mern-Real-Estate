import express from "express";
import { getListing, listing } from "../Controllers/Listing.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();


router.post("/create",verifyToken,listing)
router.get("/getListings/:id",verifyToken,getListing)


export default router