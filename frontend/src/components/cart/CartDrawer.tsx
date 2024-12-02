import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Fragment, useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
type Anchor = "right";

export const CartDrawer = () => {
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      setState({ ...state, [anchor]: open });
    };

  return (
    <div>
      {(["right"] as const).map((anchor) => (
        <Fragment key={anchor}>
          <Button
            sx={{ color: "black", fontSize: "14px", fontWeight: "700" }}
            className="flex gap-2 items-center "
            onClick={toggleDrawer(anchor, true)}
          >
            <ShoppingBasketIcon />
            Cart
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            <div className="w-[586px]">
              <div className=" ml-6 mr-6 mt-[26px] mb-[26px] flex gap-[171px] items-center">
                <ArrowBackIosNewIcon />
                <p className="text-xl font-black">Таны сагс</p>
              </div>
            </div>
          </Drawer>
        </Fragment>
      ))}
    </div>
  );
};
