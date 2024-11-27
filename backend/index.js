import express from "express";

import dotenv from "dotenv";
import userRouter from "./routes/user.Route.js";
import mongoose from "mongoose";
import categoryRouter from "./routes/category.Route.js";
import bodyParser from "body-parser";
import foodRouter from "./routes/food.Route.js";
import orderRouter from "./routes/order.Route.js";
dotenv.config();
mongoose.connect(process.env.MONGODB_CONNECT_URL);
const server = express();
const PORT = 8000;

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.use("/api", userRouter);
server.use("/api", categoryRouter);
server.use("/api", foodRouter);
server.use("/api", orderRouter);
// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// server.post("/image-upload", async (req, response) => {
//   cloudinary.uploader
//     .upload("./asset/Food.png", {
//       resource_type: "image",
//     })
//     .then((result) => {
//       console.log("success", JSON.stringify(result, null, 2));
//     })
//     .catch((error) => {
//       console.log("error", JSON.stringify(error, null, 2));
//     });
// });
server.listen(PORT, () => {
  console.log(`http:localhost:${PORT} ajillaj ehelle`);
});
