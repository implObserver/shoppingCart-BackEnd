import mongoose, { Model } from "mongoose";
import { ProductSchema } from "../../database/schemas/product/product.schema";
import { IProduct } from "../../database/schemas/product/types/product";

export const Product: Model<IProduct> = mongoose.model<IProduct>('Product', ProductSchema);