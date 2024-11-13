import { Schema } from "mongoose";
import { BookInstance } from "./types/book";

export const BookInstanceSchema = new Schema<BookInstance>({
  book: { type: Schema.Types.ObjectId, ref: 'Book', required: true },
  imprint: { type: String, required: true },
  status: {
    type: String,
    required: true,
    enum: ['Available', 'Sold', 'Not Available'],
    default: 'Available',
  },
});
