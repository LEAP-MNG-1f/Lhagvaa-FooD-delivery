"use client";

import { Button } from "@mui/material";
import { useState } from "react";



const MenuPage = () => {
  const [selectedButton, setSelectedButton] = useState<String>("");

  const ChangeBgColor = (value: String) => {
    setSelectedButton(value);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="container max-w-[1200px] flex items-center justify-between pt-8 pb-8 ">
        <Button
          onClick={() => {
            ChangeBgColor("breakfast");
          }}
          sx={{
            backgroundColor: selectedButton === "breakfast" ? "green" : "white",
            color: selectedButton === "breakfast" ? "white" : "black",
            borderColor: "#D6D8DB",
            borderRadius: "8px",
          }}
          variant="outlined"
          className="w-[249px] h-[27px] pt-2 pb-2 pl-4 pr-4 text-lg"
        >
          Breakfast
        </Button>
        <Button
          onClick={() => {
            ChangeBgColor("soup");
          }}
          sx={{
            backgroundColor: selectedButton === "soup" ? "green" : "white",
            color: selectedButton === "soup" ? "white" : "black",
            borderColor: "#D6D8DB",
            borderRadius: "8px",
          }}
          variant="outlined"
          className="w-[249px] h-[27px] pt-2 pb-2 pl-4 pr-4 font-medium text-lg"
        >
          Soup
        </Button>
        <Button
          onClick={() => {
            ChangeBgColor("maincourse");
          }}
          sx={{
            backgroundColor:
              selectedButton === "maincourse" ? "green" : "white",
            color: selectedButton === "maincourse" ? "white" : "black",
            borderColor: "#D6D8DB",
            borderRadius: "8px",
          }}
          variant="outlined"
          className="w-[249px] h-[27px] pt-2 pb-2 pl-4 pr-4 font-medium text-lg"
        >
          Main Course
        </Button>
        <Button
          onClick={() => {
            ChangeBgColor("dessert");
          }}
          sx={{
            backgroundColor: selectedButton === "dessert" ? "green" : "white",
            color: selectedButton === "dessert" ? "white" : "black",
            borderColor: "#D6D8DB",
            borderRadius: "8px",
          }}
          variant="outlined"
          className="w-[249px] h-[27px] pt-2 pb-2 pl-4 pr-4 font-medium text-lg"
        >
          Dessert
        </Button>
      </div>
      <div></div>
    </div>
  );
};

export default MenuPage;
