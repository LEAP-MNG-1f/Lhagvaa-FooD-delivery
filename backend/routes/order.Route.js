import express from "express";
import { createOrder, getAllOrders } from "../controllers/order.Controller.js";
const orderRouter = express.Router();

orderRouter.get("/orders", getAllOrders);
orderRouter.post("/orders", createOrder);

export default orderRouter;
