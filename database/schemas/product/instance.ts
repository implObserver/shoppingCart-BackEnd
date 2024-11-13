import { Schema } from 'mongoose';
import { IProductInstance } from './types/product';

export const InstanceSchema = new Schema<IProductInstance>({
  instanceOf: { Type: Schema.Types.ObjectId, required: true },
});
