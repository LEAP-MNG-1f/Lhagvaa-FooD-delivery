// import { Order } from "../model/order";

// const createOrder = async (req, response) => {
//   const result = await Order.create({
//     userID: "67440017fcc381f2c42c4b51",
//     orderNumber: 1,
//     foodsId: "",
//     totalPrice: "1000",
//     process: "active",
//     createdDate: ``,
//     district: "BZD",
//     khoroo: "6",
//     Apartment: "GSA",
//   });
//   response.json({
//     succes: true,
//     data: result,
//   });
// };

// const getAllOrders = async (req, response) => {
//   const result = await Order.find().populate("userId").populate("foodsId");

//   response.json({
//     succes: true,
//     data: result,
//   });
// };

// export { getAllOrders, createOrder };
