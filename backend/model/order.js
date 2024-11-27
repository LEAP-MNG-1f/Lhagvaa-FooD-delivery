import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userID: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
    required: true,
  },
  orderNumber: {
    type: Number,
    required: true,
  },
  foodsId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Food",
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  process: {
    type: String,
    enum: ["inProgress", "active", "delivered", "waiting"],
  },
  createdDate: {
    type: Date,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  Khoroo: {
    type: String,
    required: true,
  },
  Apartment: {
    type: String,
    required: true,
  },
});

export const Order = mongoose.model("Order", orderSchema);
