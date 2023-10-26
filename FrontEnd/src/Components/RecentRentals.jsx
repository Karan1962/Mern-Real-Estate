import React from "react";
import { rentCard } from "../CardData/RentCard";
import Cards from "./Cards";
const RecentRentals = () => {
  return (
    <Cards
      Type="Recent Places For Rent"
      Desc="Show More Places For Rent"
      Cards={rentCard}
    />
  );
};

export default RecentRentals;
