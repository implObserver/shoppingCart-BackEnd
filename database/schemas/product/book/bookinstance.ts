import { Schema } from "mongoose";
import { IBookInstance } from "./types/book";

export const BookInstanceSchema = new Schema<IBookInstance>({
  book: { type: Schema.Types.ObjectId, ref: 'Book', required: true },
  imprint: { type: String, required: true },
  status: {
    type: String,
    required: true,
    enum: ['Available', 'Sold', 'Not Available'],
    default: 'Available',
  },
});
