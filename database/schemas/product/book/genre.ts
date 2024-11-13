import { Schema } from "mongoose";
import { Genre } from "./types/book";

export const GenreSchema = new Schema<Genre>({
  name: { type: String, required: true, minLength: 3, maxLength: 100 },
});