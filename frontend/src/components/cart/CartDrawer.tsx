import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Fragment, useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ClearIcon from "@mui/icons-material/Clear";
import { useFoodContext } from "../context/DataContext";
// import { useCategorizedFoodContext } from "../context/CartContext";
import Link from "next/link";
type Anchor = "right";

export const CartDrawer = () => {
  const { increaseQuantity, decreaseQuantity } = useFoodContext();
  // const { cartFoods, totalPrice } = useCategorizedFoodContext();
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
              {/* {cartFoods?.map((food) => {
                return (
                  <div
                    key={food._id}
                    className="p-4 border-t flex gap-4 border-b"
                  >
                    <div>
                      <img
                        className="border w-[245px] h-[150px] "
                        src={food?.image}
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between">
                        <div>
                          <p className="font-semibold">{food?.name}</p>
                          <p className="text-lg text-[#18BA51]">
                            {food?.price}₮
                          </p>
                        </div>
                        <button>
                          <ClearIcon />
                        </button>
                      </div>
                      <div className="text-[#767676]  ">
                        {food?.ingeredient}
                      </div>
                      <div>
                        <button onClick={decreaseQuantity}>-</button>
                        <p>{food?.quantity}</p>
                        <button onClick={increaseQuantity}>+</button>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="w-[586px] h-[172px] px-[8] py-[30px] flex justify-center items-center  gap-[10px]  border-t border-t-[#BBBECD33] sticky bottom-0">
                <div className="w-[256px] flex flex-col">
                  <p className="text-[18px] font-[400] leading-[27px] text-[#5E6166]">
                    Нийт төлөх дүн
                  </p>
                  <p className="text-[18px] font-[700] leading-[27px]">
                    {totalPrice} ₮
                  </p>
                </div>
                {cartFoods && cartFoods?.length > 0 ? (
                  <Link
                    href={"./confirmation"}
                    className="w-[256px] h-[48px] rounded-1 text-[16px] font-[400] leading-[19.09px] bg-[#18BA51] text-white px-4 py-2 flex justify-center items-center"
                  >
                    Захиалах
                  </Link>
                ) : (
                  <button
                    className="w-[256px] h-[48px] rounded-1 text-[16px] font-[400] leading-[19.09px] bg-[#18BA51] text-white px-4 py-2 flex justify-center items-center"
                    onClick={() =>
                      alert(
                        "Таны сагс хоосон байна. Захиалах бүтээгдэхүүнээ сонгоно уу"
                      )
                    }
                  >
                    Захиалах
                  </button>
                )}
              </div> */}
            </div>
          </Drawer>
        </Fragment>
      ))}
    </div>
  );
};
