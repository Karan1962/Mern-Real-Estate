import Listing from "../Models/Listing.model.js";
import { errorHandler } from "../utils/errorHandler.js";

export const listing = async (req, res, next) => {
  try {
    const listing = await Listing.create(req.body);
    return res.status(201).json(listing);
  } catch (err) {
    next(err);
  }
};

export const getListing = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      const listings = await Listing.find({ userRef: req.params.id });
      res.status(201).json(listings);
    } catch (err) {
      next(err);
    }
  } else {
    next(errorHandler(404, " You can only view your own listings !"));
  }
};
