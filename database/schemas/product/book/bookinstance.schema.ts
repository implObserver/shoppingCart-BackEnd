import { Schema, model } from 'mongoose';
import { ProductInstanceSchema } from '../instance.schema';
import { IBookInstance } from './types/book';

// Схема для экземпляра книги (использует общую схему для экземпляра продукта)
const BookInstanceSchema = new Schema<IBookInstance>({
  ...ProductInstanceSchema.obj,
  book: { type: Schema.Types.ObjectId, ref: 'Book', required: true },
  imprint: { type: String, required: true },
  status: {
    type: String,
    required: true,
    enum: ['Available', 'Sold', 'Not Available'],
    default: 'Available',
  },
});