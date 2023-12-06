import express from "express";
import {
  deleteListing,
  getListing,
  listing,
  getUpdateListing,
  updateListing,
  getFilterListing,
} from "../Controllers/Listing.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post("/create", verifyToken, listing);
router.get("/getListings/:id", verifyToken, getListing);
router.delete("/delete/:id", verifyToken, deleteListing);
router.put("/update/:id", verifyToken, updateListing);
router.get("/getUpdateListing/:id", getUpdateListing);
router.get("/listings", getFilterListing);

export default router;
