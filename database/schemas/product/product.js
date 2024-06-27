import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const ProductSchema = new Schema({
    instance: { Type: Schema.Types.ObjectId, ref: "Instance", required: true },
    price: { Type: Number, min: 0 },
    discount: { Type: Number, min: 0, max: 1 },
})

ProductSchema.virtual("dicountPrice").get(function () {
    let discountPrice;
    if (this.price && this.discount) {
        discountPrice = this.price * this.discount;
    }
    return discountPrice;
})

ProductSchema.virtual("colorPrice").get(function () {
    let color;
    if (this.price && this.discount) {
        color =
            this.discount === 1
                ? "#000000"
                : this.discount > 0.5
                    ? "#008000"
                    : "#ff0000"
    }
    return discountPrice;
})
