import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const CartSchema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  products: [{ type: Schema.Types.ObjectId, ref: 'Product', required: false }],
});
