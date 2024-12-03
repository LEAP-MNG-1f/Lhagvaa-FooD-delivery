import { CategoryIcon } from "../icons/CategoryIcon";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { TFoodType } from "./SaleMealsSection";
import { FoodCard } from "../card/foodCard";

import { useFoodContext } from "../context/DataContext";
import Link from "next/link";
type TCategoryProps = {
  foodData: TFoodType;
  categoryName: string;
};
export const CategorySection = ({ foodData, categoryName }: TCategoryProps) => {
  const { handleSelectedCategory } = useFoodContext();
  return (
    <div>
      <div className="w-[1200px] pt-4 pb-4 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <CategoryIcon />
          <p className="text-[#272727] font-bold text-2xl">{categoryName}</p>
        </div>
        <Link href={"/menu"}>
          <button
            onClick={() => {
              handleSelectedCategory(categoryName);
            }}
            className="text-[#18BA51] text-sm"
          >
            Бүгдийг харах <KeyboardArrowRightIcon />
          </button>
        </Link>
      </div>
      <div className="flex gap-6 mt-6">
        {foodData?.slice(0, 4).map((food) => {
          return (
            <FoodCard
              key={food._id}
              name={food.name}
              img={food.image}
              price={food.price}
              ingeredient={food.ingeredient}
            />
          );
        })}
      </div>
    </div>
  );
};
