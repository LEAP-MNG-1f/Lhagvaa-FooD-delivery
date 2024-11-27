import { Food } from "../model/food.js";
import bodyParser from "body-parser";
const createFood = async (req, response) => {
  const result = await Food.create({});
};
