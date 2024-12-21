import { Schema } from 'mongoose';
import { ICategory } from './types/category';

// Схема категории
const CategorySchema = new Schema<ICategory>({
  name: { type: String, required: true, unique: true },
  parent: { type: Schema.Types.ObjectId, ref: 'Category' }, // ссылка на родительскую категорию
});