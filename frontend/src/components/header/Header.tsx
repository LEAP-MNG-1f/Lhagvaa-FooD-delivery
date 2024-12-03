"use client";
import { CartDrawer } from "../cart/CartDrawer";

import { PineconeLogo } from "../icons/PineconeLogo";
import Link from "next/link";

export const Header = () => {
  return (
    <div className=" flex flex-col justify-center items-center">
      <div className="container max-w-[1200px]">
        <div className="flex items-center pt-2 pb-2 pr-4 pl-4 justify-between">
          <div className="flex gap-8 items-center ">
            <PineconeLogo />
            <Link href={"/"}>
              <button className="font-bold text-sm">Home</button>
            </Link>
            <Link href={"/menu"}>
              <button className="font-bold text-sm">Menu</button>
            </Link>
            <Link href={"/delivery-map"}>
              <button className="font-bold text-sm">Delivery Map</button>
            </Link>
          </div>
          <div>
            <CartDrawer />
          </div>
        </div>
      </div>
    </div>
  );
};
