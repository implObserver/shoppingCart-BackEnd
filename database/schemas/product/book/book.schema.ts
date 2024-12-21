import { Schema } from "mongoose";
import { ProductSchema } from "../product.schema.ts";
import { IBook } from "./types/book";
import { model } from "mongoose";

export const BookSchema = new Schema<IBook>({
  ...ProductSchema.obj,
  title: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: 'Author', required: true },
  summary: { type: String, required: true },
  isbn: { type: String, required: true },
  genre: [{ type: Schema.Types.ObjectId, ref: 'Genre' }],
});