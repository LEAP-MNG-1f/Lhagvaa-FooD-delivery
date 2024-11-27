import { Order } from "../model/order.js";

const createOrder = async (req, response) => {
  try {
    const {
      userId,
      orderNumber,
      foodIds,
      totalPrice,
      district,
      khoroo,
      apartment,
    } = req.body;
    const result = await Order.create({
      userId,
      orderNumber,
      foodIds,
      totalPrice,
      district,
      khoroo,
      apartment,
    });
    response.status(201).json({
      succes: true,
      data: result,
    });
  } catch (error) {
    response.status(501).json({ error: "error cant create order" });
  }
};

const getAllOrders = async (req, response) => {
  const result = await Order.find().populate("userId").populate("foodIds");

  response.json({
    succes: true,
    data: result,
  });
};

export { getAllOrders, createOrder };
