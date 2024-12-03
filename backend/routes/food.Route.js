import express from "express";
import {
  createFood,
  deleteFood,
  getAllFoods,
  getSelectedFoods,
  updateFood,
} from "../controllers/food.Controller.js";
const foodRouter = express.Router();

foodRouter.get("/food", getAllFoods);
foodRouter.post("/food", createFood);
foodRouter.put(`/food/:id`, updateFood);
foodRouter.delete(`/food/:id`, deleteFood);
foodRouter.get("/selected", getSelectedFoods);

export default foodRouter;
