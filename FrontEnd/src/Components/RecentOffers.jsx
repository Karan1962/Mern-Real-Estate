import React from "react";
import { offerCards } from "../CardData/OfferCard.js";
import Cards from "./Cards.jsx";

const RecentOffers = () => {
  return (
    <Cards Type='Recent Offers' Desc='Show More Offers' Cards={offerCards}/>
  );
};

export default RecentOffers;
