import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const CartSchema = new Schema({
  products: [{ type: Schema.Types.ObjectId, ref: 'Product', required: false }],
});
