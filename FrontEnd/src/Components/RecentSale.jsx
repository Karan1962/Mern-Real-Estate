import React from "react";
import { saleData } from "../CardData/SaleCard";
import Cards from "./Cards";

const RecentSale = () => {
  return (
    <Cards
      Type="Recent Places For Sale"
      Desc="Show More Places For Sale"
      Cards={saleData}
    />
  );
};

export default RecentSale;
