import mongoose, { Document } from "mongoose";

interface Cart extends Document {
    userId: mongoose.Schema.Types.ObjectId;
    products: mongoose.Schema.Types.ObjectId[];
}