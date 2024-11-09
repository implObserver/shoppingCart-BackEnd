import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
  cart: { Type: Schema.Types.ObjectId, ref: 'Cart', required: true },
});
