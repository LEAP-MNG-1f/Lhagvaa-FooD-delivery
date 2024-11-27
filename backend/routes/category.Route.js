import express from "express";
import {
  getAllCategory,
  createCategory,
} from "../controllers/category.Controller.js";
const categoryRouter = express.Router();

categoryRouter.get("/category", getAllCategory);
categoryRouter.post("/category", createCategory);

export default categoryRouter;
