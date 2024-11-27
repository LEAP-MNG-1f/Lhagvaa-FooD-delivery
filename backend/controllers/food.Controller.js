import { Food } from "../model/food.js";

const createFood = async (req, response) => {
  try {
    const { name, image, ingeredient, price, category } = req.body;

    const result = await Food.create({
      name,
      image,
      ingeredient,
      price,
      category,
    });
    response.status(201).json({
      succes: true,
      data: result,
    });
  } catch (error) {
    response.status(501).json({ error: "cant read foodData" });
  }
};

const getAllFoods = async (req, response) => {
  const result = await Food.find().populate("category");

  response.json({
    succes: true,
    data: result,
  });
};

export { createFood, getAllFoods };
