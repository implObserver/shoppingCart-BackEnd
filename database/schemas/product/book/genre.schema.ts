import { Schema } from "mongoose";
import { IGenre } from "./types/book";

export const GenreSchema = new Schema<IGenre>({
  name: { type: String, required: true, minLength: 3, maxLength: 100 },
});