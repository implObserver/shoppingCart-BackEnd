import { Schema } from 'mongoose';
import { ProductInstance } from './types/product';

export const InstanceSchema = new Schema<ProductInstance>({
  instanceOf: { Type: Schema.Types.ObjectId, required: true },
});
