import { FoodCard } from "../card/foodCard";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { CategoryIcon } from "../icons/CategoryIcon";
export const SaleMealsSection = () => {
  return (
    <div className="container max-w-[1200px] mt-28 flex flex-col gap-20">
      <div>
        <div className="w-[1200px] pt-4 pb-4 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <CategoryIcon />
            <p className="text-[#272727] font-bold text-2xl">Хямдралтай</p>
          </div>
          <p className="text-[#18BA51] text-sm">
            Бүгдийг харах <KeyboardArrowRightIcon />
          </p>
        </div>
        <div className="flex gap-6 mt-6">
          <FoodCard img="breakfast.png" name="breakfast" price={10000} />
          <FoodCard img="breakfast.png" name="breakf" price={10000} />
          <FoodCard img="breakfast.png" name="breakfast" price={10000} />
          <FoodCard img="breakfast.png" name="breakfast" price={10000} />
        </div>
      </div>
      <div>
        <div className="w-[1200px] pt-4 pb-4 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <CategoryIcon />
            <p className="text-[#272727] font-bold text-2xl">Үндсэн хоол</p>
          </div>
          <p className="text-[#18BA51] text-sm">
            Бүгдийг харах <KeyboardArrowRightIcon />
          </p>
        </div>
        <div className="flex gap-6 mt-6">
          <FoodCard img="breakfast.png" name="breakfast" price={10000} />
          <FoodCard img="breakfast.png" name="breakf" price={10000} />
          <FoodCard img="breakfast.png" name="breakfast" price={10000} />
          <FoodCard img="breakfast.png" name="breakfast" price={10000} />
        </div>
      </div>
      <div>
        <div className="w-[1200px] pt-4 pb-4 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <CategoryIcon />
            <p className="text-[#272727] font-bold text-2xl">Салад ба зууш</p>
          </div>
          <p className="text-[#18BA51] text-sm">
            Бүгдийг харах <KeyboardArrowRightIcon />
          </p>
        </div>
        <div className="flex gap-6 mt-6">
          <FoodCard img="breakfast.png" name="breakfast" price={10000} />
          <FoodCard img="breakfast.png" name="breakf" price={10000} />
          <FoodCard img="breakfast.png" name="breakfast" price={10000} />
          <FoodCard img="breakfast.png" name="breakfast" price={10000} />
        </div>
      </div>
      <div>
        <div className="w-[1200px] pt-4 pb-4 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <CategoryIcon />
            <p className="text-[#272727] font-bold text-2xl">Амттан</p>
          </div>
          <p className="text-[#18BA51] text-sm">
            Бүгдийг харах <KeyboardArrowRightIcon />
          </p>
        </div>
        <div className="flex gap-6 mt-6">
          <FoodCard img="breakfast.png" name="breakfast" price={10000} />
          <FoodCard img="breakfast.png" name="breakf" price={10000} />
          <FoodCard img="breakfast.png" name="breakfast" price={10000} />
          <FoodCard img="breakfast.png" name="breakfast" price={10000} />
        </div>
      </div>
    </div>
  );
};
