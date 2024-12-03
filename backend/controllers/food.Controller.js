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

const getSelectedFoods = async (req, response) => {
  try {
    const { selectedCategory } = req.query;
    const result = await Food.find().populate("category");
    const SelectedFoods = result.filter((foods) => {
      if (foods?.category.name === selectedCategory) {
        return foods;
      }
    });

    response.status(201).json({
      success: true,
      data: SelectedFoods,
    });
  } catch (error) {
    response.status(501).json({ error: error });
  }
};

const updateFood = async (req, response) => {
  try {
    const { name, image, ingeredient, price, category } = req.body;
    const foodId = req.params[`id`];
    const result = await Food.findByIdAndUpdate(foodId, {
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
    response.status(501).json({ error: "Cant update food" });
  }
};

const deleteFood = async (req, response) => {
  try {
    const Id = req.params[`id`];
    const result = await Food.findByIdAndDelete(Id);
    response.status(201).json({
      succes: true,
      data: result,
    });
  } catch (error) {
    response.status(501).json({
      error: error,
    });
  }
};
export { createFood, getAllFoods, updateFood, deleteFood, getSelectedFoods };
