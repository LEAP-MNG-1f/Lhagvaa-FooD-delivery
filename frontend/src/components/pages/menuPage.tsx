"use client";
import { Button } from "@mui/material";

import { useFoodContext } from "../context/DataContext";
import { FoodCard } from "../card/foodCard";

const MenuPage = () => {
  const { categories, handleSelectedCategory, selectedCategory, foods } =
    useFoodContext();
  return (
    <div className="w-full mt-[89px] mb-[32px] flex justify-center ">
      <div className="w-[1200px] flex flex-col">
        <div className="flex justify-between">
          {categories.map((category) => {
            return (
              <Button
                onClick={() => {
                  handleSelectedCategory(category.name);
                }}
                key={category._id}
                className={`!w-[280.5px] !h-[43px] !rounded-[8px] !border-1 ${
                  category?.name === selectedCategory
                    ? "!bg-[#18BA51] !text-white"
                    : "!bg-white !text-black "
                } `}
                variant="contained"
              >
                {category?.name}
              </Button>
            );
          })}
        </div>
        <div className="w-[1200px] grid grid-cols-4 mt-[80px] gap-6">
          {foods?.map((food) => {
            return (
              <FoodCard
                key={food._id}
                img={food?.image}
                price={food?.price}
                name={food?.name}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default MenuPage;
