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
    response.status(501).json({ error: "can't create food" });
  }
};

const getAllFoods = async (req, response) => {
  try {
    const result = await Food.find().populate("category");

    response.status(201).json({
      succes: true,
      data: result,
    });
  } catch (error) {
    response.status(501).json({ error: "Can't get Food information" });
  }
};

const updateFood = async (req, response) => {
  try {
    const { name, image, ingeredient, price, category } = req.body;
  } catch (error) {
    response.status(501).json({ error: "Cant update food" });
  }
};

export { createFood, getAllFoods };
