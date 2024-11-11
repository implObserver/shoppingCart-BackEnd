import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const GenreSchema = new Schema({
  name: { type: String, required: true, minLength: 3, maxLength: 100 },
});