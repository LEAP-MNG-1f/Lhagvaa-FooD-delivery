"use client";
import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
  SetStateAction,
} from "react";

export interface TFoodType {
  _id?: string;
  name: string;
  image: string;
  ingeredient: string;
  price: string;
}
export interface CategoryType {
  _id?: string;
  name: string;
}
interface FoodContextType {
  foods: TFoodType[];
  categories: CategoryType[];
  selectedCategory: string;
  quantity: number;
  setFoods: React.Dispatch<React.SetStateAction<any[]>>;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  handleSelectedCategory: (category: SetStateAction<string>) => void;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  increaseQuantity: () => void;
  decreaseQuantity: () => void;
}
const FoodContext = createContext<FoodContextType | undefined>(undefined);

export const FoodProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [foods, setFoods] = useState<any[]>([]);
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await fetch(
        `${process.env.BACKEND_ENDPOINT}/api/category`
      );
      const dataCategories = await response.json();

      if (dataCategories?.data && Array.isArray(dataCategories?.data)) {
        setCategories(dataCategories?.data);

        if (dataCategories.data.length > 0) {
          setSelectedCategory(dataCategories?.data[0].name);
        }
      } else {
        setCategories([]);
      }
    } catch (error) {
      console.log(error);
      setCategories([]);
    }
  };

  const fetchFoods = async () => {
    try {
      const response = await fetch(
        `${process.env.BACKEND_ENDPOINT}/api/selected?selectedCategory=${selectedCategory}`
      );
      const dataFoods = await response.json();

      setFoods(dataFoods?.data || []);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSelectedCategory = (category: SetStateAction<string>) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      fetchFoods();
    }
  }, [selectedCategory]);

  const contextValue = {
    foods,
    categories,
    selectedCategory,
    setFoods,
    setSelectedCategory,
    handleSelectedCategory,
    quantity,
    setQuantity,
    increaseQuantity,
    decreaseQuantity,
  };
  return (
    <FoodContext.Provider value={contextValue}>{children}</FoodContext.Provider>
  );
};

export const useFoodContext = () => {
  const context = useContext(FoodContext);
  if (context === undefined) {
    throw new Error("useFoodContext must be used within a FoodProvider");
  }
  return context;
};
