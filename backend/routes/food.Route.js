import express from "express";
import { createFood, getAllFoods } from "../controllers/food.Controller.js";
const foodRouter = express.Router();

foodRouter.get("/food", getAllFoods);
foodRouter.post("/food", createFood);

export default foodRouter;
