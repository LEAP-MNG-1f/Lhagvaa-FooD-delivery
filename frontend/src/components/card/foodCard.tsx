import { useState } from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import RemoveIcon from "@mui/icons-material/Remove";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));
type FoodCardType = {
  img: string;
  name: string;
  price: number;
  ingeredient?: string;
};
export const FoodCard = (Cards: FoodCardType) => {
  const [open, setOpen] = useState(false);
  const [cart, SetCart] = useState([]);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleAddtoCart = () => {};
  return (
    <div>
      <Button onClick={handleClickOpen}>
        <div className="">
          <div className="flex flex-col">
            <img
              className="w-[292px] h-[186px] rounded-2xl"
              src={`${Cards.img}`}
            />
            <div className="flex flex-col items-start pl-[10px]">
              <p className="text-[#000] font-semibold text-lg ">{Cards.name}</p>
              <p className="text-[#18BA51] font-semibold text-lg">
                {Cards.price}₮
              </p>
            </div>
          </div>
        </div>
      </Button>
      <BootstrapDialog
        sx={{
          "& .MuiDialog-paper": {
            borderRadius: "16px",
            maxWidth: 981,
          },
        }}
        fullWidth={true}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <div className="w-[981px] h-[500px] p-8 flex ">
          <div className=" ">
            <img className="w-screen h-full " src={Cards.img} />
          </div>
          <div>
            <div className="w-[394px] flex justify-end  ">
              <IconButton className="" aria-label="close" onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </div>
            <div className="flex gap-8 flex-col">
              <div>
                <p className="font-bold text-[28px]">{Cards.name}</p>
                <p className="text-[#18BA51] font-semibold text-lg">
                  {Cards.price}₮
                </p>
              </div>
              <div className="flex flex-col gap-3 ">
                <p className="text-lg font-semibold ">Орц</p>
                <p className="bg-[#F6F6F6] text-[#767676] p-2 ">
                  {Cards.ingeredient}, hello, hi
                </p>
              </div>
              <div>
                <p className="text-lg font-semibold">Тоо</p>
              </div>
              <div className="flex justify-between">
                <Button
                  sx={{
                    border: "10px",
                    backgroundColor: "#18BA51",
                    color: "white",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                    height: "40px",
                  }}
                >
                  <RemoveIcon />
                </Button>
                <p className="pl-8 pr-8 pt-2 pb-2">1</p>
                <Button
                  sx={{
                    border: "10px",
                    backgroundColor: "#18BA51",
                    color: "white",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                    height: "40px",
                  }}
                >
                  <AddIcon />
                </Button>
              </div>
              <Button
                sx={{
                  backgroundColor: "#18BA51",
                  paddingLeft: "16px",
                  paddingRight: "16px",
                  paddingTop: "8px",
                  paddingBottom: "8px",
                  color: "white",
                }}
                autoFocus
                onClick={handleClose}
                onSubmit={handleAddtoCart}
              >
                Сагслах
              </Button>
            </div>
          </div>
        </div>
      </BootstrapDialog>
    </div>
  );
};
