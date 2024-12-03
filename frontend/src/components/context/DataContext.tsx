"use client";

import {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
  SetStateAction,
} from "react";

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
