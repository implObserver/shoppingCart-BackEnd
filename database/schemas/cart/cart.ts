import mongoose, { Schema } from "mongoose";
import { ICart } from "./types/cart";

export const CartSchema = new Schema<ICart>({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  products: [{ type: Schema.Types.ObjectId, ref: 'Product', required: false }],
});
