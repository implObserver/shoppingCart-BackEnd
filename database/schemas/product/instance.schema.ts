import { Schema } from 'mongoose';
import { IProductInstance } from './types/product';

// Схема для экземпляра продукта
export const ProductInstanceSchema = new Schema<IProductInstance>({
  product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
  serialNumber: { type: String, required: true, unique: true },
  status: { type: String, enum: ['Available', 'Sold', 'Not Available'], default: 'Available' },
});