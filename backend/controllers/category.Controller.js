import { Category } from "../model/category.js";

const createCategory = async (req, response) => {
  try {
    const { name } = req.body;
    const result = await Category.create({
      name,
    });
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

const getAllCategory = async (req, response) => {
  try {
    const result = await Category.find();

    response.json({
      succes: true,
      data: result,
    });
  } catch (error) {
    response.status(501).json({
      error: error,
    });
  }
};

const updateCategory = async (req, response) => {
  try {
    const { name } = req.body;
    const Id = req.params["id"];
    const result = await Category.findByIdAndUpdate(Id, {
      name,
    });
    response.status(201).json({ succes: true, data: result });
  } catch (error) {
    response.status(501).json({ error: error });
  }
};

const deleteCategory = async (req, response) => {
  try {
    const { name } = req.body;
    const Id = req.params["id"];
    const result = await Category.findByIdAndDelete(Id);
    response.status(201).json({ succes: true, data: result });
  } catch (error) {
    response.status(501).json({ error: error });
  }
};
export { createCategory, getAllCategory, updateCategory, deleteCategory };
