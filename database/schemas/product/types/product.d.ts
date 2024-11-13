import { Document } from "mongoose";

interface IProduct extends Document {
    instance: mongoose.Types.ObjectId;
    price: number;
    discount: number;
}

interface IProductInstance extends Document {
    instanceOf: mongoose.Types.ObjectId;
}