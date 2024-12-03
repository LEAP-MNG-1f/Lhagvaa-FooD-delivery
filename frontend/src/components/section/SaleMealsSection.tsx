import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { CategoryIcon } from "../icons/CategoryIcon";
import { FoodCard } from "../card/foodCard";
import { useEffect, useState } from "react";
import { groupBy } from "lodash";
export type TFoodType = {
  _id: string;
  name: string;
  image: string;
  price: string;
  category: {
    _id: string;
    name: string;
    _v: number;
  };
  ingeredient: string;
  _v: number;
};
type TSelectedFoods = {
  FoodDatas: TFoodType[];
};

export const SaleMealsSection = () => {
  const [foods, setFoods] = useState<TSelectedFoods>();
  const fetchfood = async () => {
    try {
      const response = await fetch(`${process.env.BACKEND_ENDPOINT}/api/food`);
      const fooddata = await response.json();

      setFoods(fooddata.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchfood();
  }, []);
  console.log(foods);
  const groupedFoods = groupBy(foods, "Category");
  console.log(groupedFoods);

  return (
    <div className="container max-w-[1200px] mt-28 flex flex-col gap-20">
      <div>
        <div className="w-[1200px] pt-4 pb-4 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <CategoryIcon />
            <p className="text-[#272727] font-bold text-2xl"></p>
          </div>
          <p className="text-[#18BA51] text-sm">
            Бүгдийг харах <KeyboardArrowRightIcon />
          </p>
        </div>
      </div>
    </div>
  );
};
