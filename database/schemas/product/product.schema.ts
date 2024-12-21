// models/product.model.ts
import { Schema } from 'mongoose';
import { IProduct } from './types/product';

// Схема для продукта
export const ProductSchema = new Schema<IProduct>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true, min: 0 },
  discount: { type: Number, min: 0, max: 1 },
  category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
  imageUrl: { type: String },
});
