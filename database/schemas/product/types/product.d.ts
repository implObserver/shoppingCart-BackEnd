import { Document } from "mongoose";

interface Product extends Document {
    instance: mongoose.Types.ObjectId;
    price: number;
    discount: number;
}

interface ProductInstance {
    instanceOf: mongoose.Types.ObjectId;
}