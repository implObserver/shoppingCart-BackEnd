import mongoose, { Model } from "mongoose";
import { ICart } from "../../database/schemas/cart/types/cart";
import { CartSchema } from "../../database/schemas/cart/cart";

export const Cart: Model<ICart> = mongoose.model<ICart>('Cart', CartSchema);