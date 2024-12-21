import mongoose, { Document } from "mongoose";

export interface ICart extends Document {
    userId: mongoose.Schema.Types.ObjectId;
    products: mongoose.Schema.Types.ObjectId[];
}