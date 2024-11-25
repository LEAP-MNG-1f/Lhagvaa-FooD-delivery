import express from "express";

// import dotenv from "dotenv";
import userRouter from "./routes/userRoute.js";
import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://Lhagvaa0102:Lhagvaa.0102@leap0102.k0ghj.mongodb.net/food-delivery"
);
const server = express();
const PORT = 8000;

server.use("/api", userRouter);

server.listen(PORT, () => {
  console.log(`http:localhost:${PORT} ajillaj ehelle`);
});

// dotenv.config();
// // cloudinary.config({
// //   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
// //   api_key: process.env.CLOUDINARY_API_KEY,
// //   api_secret: process.env.CLOUDINARY_API_SECRET,
// // });

// // server.post("/image-upload", async (req, response) => {
// //   cloudinary.uploader
// //     .upload("./asset/Food.png", {
// //       resource_type: "image",
// //     })
// //     .then((result) => {
// //       console.log("success", JSON.stringify(result, null, 2));
// //     })
// //     .catch((error) => {
// //       console.log("error", JSON.stringify(error, null, 2));
// //     });
// // });
// server.post("/create", async (req, response) => {
//   const result = await product.create({
//     name: "Clothes",
//     year: 2000,
//   });
//   response.json({
//     succes: true,
//     data: result,
//   });
// });
// server.delete("/delete", async (req, response) => {
//   const result = await product.deleteOne({
//     _id: "6743f255db2f6a6a6bdc5ddc",
//   });
//   response.json({
//     succes: true,
//     data: result,
//   });
// });
