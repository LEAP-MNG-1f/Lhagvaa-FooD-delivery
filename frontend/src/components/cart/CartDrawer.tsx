import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Fragment, useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
type Anchor = "right";
type CartItemType = {
  img: string;
  name: string;
  price: number;
  quantity: number;
};
export const CartDrawer = ({ cart }: { cart: CartItemType[] }) => {
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
            sx={{
              color: "black",
              fontSize: "14px",
              fontWeight: "700",
              alignItems: "center",
            }}
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
              {/* <div>
                {cart.map((item, index) => (
                  <div key={index} className="flex justify-between p-2">
                    <div className="flex gap-2">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-[60px] h-[60px] object-cover"
                      />
                      <div>
                        <p className="font-semibold">{item.name}</p>{" "}
                        <p className="text-[#18BA51]">{item.price}₮</p>{" "}
                        <p>Quantity: {item.quantity}</p>{" "}
                      </div>
                    </div>
                  </div>
                ))}
              </div> */}
            </div>
          </Drawer>
        </Fragment>
      ))}
    </div>
  );
};
