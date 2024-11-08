import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const InstanceSchema = new Schema({
  instaceOf: { Type: Schema.Types.ObjectId, required: true },
});
