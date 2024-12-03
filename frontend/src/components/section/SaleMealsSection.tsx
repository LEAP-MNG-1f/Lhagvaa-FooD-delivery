import { useEffect, useState } from "react";
import { groupBy } from "lodash";
import { CategorySection } from "./CategorySection";
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
}[];

export const SaleMealsSection = () => {
  const [foods, setFoods] = useState<TFoodType>([]);
  const fetchFood = async () => {
    try {
      const response = await fetch(`${process.env.BACKEND_ENDPOINT}/api/food`);
      const foodData = await response.json();

      setFoods(foodData.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFood();
  }, []);

  const groupedFoods = groupBy(foods, (food) => food.category.name);

  return (
    <div className="container max-w-[1200px] mt-28 flex flex-col gap-20">
      <div>
        {Object.keys(groupedFoods).map((categoryName) => (
          <CategorySection
            key={categoryName}
            categoryName={categoryName}
            foodData={groupedFoods[categoryName]}
          />
        ))}
      </div>
    </div>
  );
};
