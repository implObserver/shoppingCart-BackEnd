import mongoose, { Model } from "mongoose";
import { IProduct } from "../../database/schemas/product/types/product";
import { ProductSchema } from "../../database/schemas/product/product";

export const Product: Model<IProduct> = mongoose.model<IProduct>('Product', ProductSchema);