"use client";
import { BACKEND_ENDPOINT } from "../constant/index.js";
export interface TFoodType {
  _id?: string;
  name: string;
  image: string;
  ingeredient: string;
  price: string;
  category: string;
}

export interface TCategoryType {
  _id?: string;
  name: string;
}
