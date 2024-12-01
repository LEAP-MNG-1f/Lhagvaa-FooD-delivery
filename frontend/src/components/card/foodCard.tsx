import { useState } from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";

import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

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
};
export const FoodCard = (Cards: FoodCardType) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

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
          <div className="">
            <img
              className="w-[500px] h-[500px]"
              src="http://res.cloudinary.com/do5xczpqa/image/upload/v1732843871/jxxkiol8dzmjppuib03o.png"
            />
          </div>
          <div className="w-[394px]">
            <IconButton className="" aria-label="close" onClick={handleClose}>
              <CloseIcon />
            </IconButton>

            <Button autoFocus onClick={handleClose}>
              Сагслах
            </Button>
          </div>
        </div>
      </BootstrapDialog>
    </div>
  );
};
