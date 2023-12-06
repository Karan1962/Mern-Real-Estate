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

export const deleteListing = async (req, res, next) => {
  const listing = await Listing.findById(req.params.id);
  if (!listing) {
    return next(errorHandler(404, "listing not found"));
  }

  if (req.user.id !== listing.userRef) {
    return next(errorHandler(401, "you can only delete your own listing"));
  }

  try {
    await Listing.findByIdAndDelete(req.params.id);
    res
      .status(201)
      .json(`listing deleted successfully by user : ${listing.userRef}`);
  } catch (err) {
    next(err);
  }
};

export const updateListing = async (req, res, next) => {
  console.log(req.params)
  const listing = await Listing.findById(req.params.id);

  if (!listing) return next(errorHandler(404, "listing not found!"));

  if (req.user.id !== listing.userRef) {
    return next(errorHandler(401, "you can only update your own listing"));
  }

  try {
    const updatedListing = await Listing.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(201).json(updatedListing);
  } catch (err) {
    next(err);
  }
};

export const getUpdateListing = async (req, res, next) => {
  try {
    const updateListing = await Listing.findById(req.params.id);
    if (!updateListing) return next(errorHandler(404, "listing not found"));
    res.status(201).json(updateListing);
  } catch (err) {
    next(err);
  }
};
