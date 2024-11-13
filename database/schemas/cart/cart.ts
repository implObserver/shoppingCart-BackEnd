import mongoose, { Schema } from "mongoose";
import { Cart } from "./types/cart";

export const CartSchema = new Schema<Cart>({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  products: [{ type: Schema.Types.ObjectId, ref: 'Product', required: false }],
});
