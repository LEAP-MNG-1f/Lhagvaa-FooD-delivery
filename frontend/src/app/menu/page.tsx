"use client";

import { Button } from "@mui/material";
import { useState } from "react";

const MenuPage = () => {
  const [isselected, setisSelected] = useState(true);
  const [colorchange, setColorchange] = useState(true);
  return (
    <div className="flex items-center justify-center">
      <div className="container max-w-[1200px] flex items-center justify-between pt-8 pb-8 ">
        <Button
          sx={{ backgroundColor: "green" }}
          variant="contained"
          className="w-[249px] h-[27px] pt-2 pb-2 pl-4 pr-4  text-lg "
        >
          Breakfast
        </Button>
        <Button
          sx={{
            color: "black",
            borderColor: "#D6D8DB",
          }}
          variant="outlined"
          className="w-[249px]  h-[27px] pt-2 pb-2 pl-4 pr-4 font-medium text-lg "
        >
          Soup
        </Button>
        <Button
          sx={{
            color: "black",
            borderColor: "#D6D8DB",
          }}
          variant="outlined"
          className="w-[249px]  h-[27px] pt-2 pb-2 pl-4 pr-4 font-medium text-lg "
        >
          Main Course
        </Button>
        <Button
          sx={{
            color: "black",
            borderColor: "#D6D8DB",
          }}
          variant="outlined"
          className="w-[249px] h-[27px] pt-2 pb-2 pl-4 pr-4 font-medium text-lg "
        >
          Dessert
        </Button>
      </div>
    </div>
  );
};
export default MenuPage;
