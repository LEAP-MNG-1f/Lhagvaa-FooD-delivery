import * as React from "react";
import Alert from "@mui/material/Alert";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { PineconeLogo } from "../icons/PineconeLogo";
export const Header = () => {
  return (
    <div className="flex items-center pt-2 pb-2 pr-4 pl-4 justify-between">
      <div className="flex gap-8">
        <PineconeLogo />
        <button className="font-bold text-sm">Home</button>
        <button className="font-bold text-sm">Menu</button>
        <button className="font-bold text-sm">Delivery Map</button>
      </div>
      <div>
        <button className="flex gap-2">
          <ShoppingBasketIcon />
          Cart
        </button>
      </div>
    </div>
  );
};
