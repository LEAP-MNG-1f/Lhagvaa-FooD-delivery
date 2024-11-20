import express, { response } from "express";

const server = express();
const PORT = 8000;

import {v2 as cloudinary } from 'cloudinary'
import dotenv from 'dotenv'
dotenv.config()
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key:process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

 server.post("/image-upload", async (req, response) =>  {
  
  cloudinary.uploader.upload("./asset/Food.png", {
    resource_type: "image",
  }).then((result) => {
    console.log("success", JSON.stringify(result, null, 2));
  }).catch((error) => {
    console.log("error", JSON.stringify(error, null, 2));
  });
 });
  



  server.listen(PORT, () => {
    console.log(`http:localhost:${PORT} ajillaj ehelle`);
  });