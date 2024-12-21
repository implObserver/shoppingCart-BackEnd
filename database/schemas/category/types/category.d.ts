import { Document } from "mongoose";

export interface ICategory extends Document {
    name: string;
    parent?: Schema.Types.ObjectId; // ID родительской категории, если есть
}