import { Category } from "../model/category.js";

const createCategory = async (req, response) => {
  const result = await Category.create({
    name: "Breakfast",
  });
};

const getAllCategory = async (req, response) => {
  const result = await Category.find();

  response.json({
    succes: true,
    data: result,
  });
};

export { createCategory, getAllCategory };
