import mongoose, { Schema } from 'mongoose';

interface Product extends Document {
  instance: mongoose.Types.ObjectId;
  price: number;
  discount: number;
  dicountPrice: number;
  colorPrice: string;
}

export const ProductSchema = new Schema<Product>({
  instance: { type: Schema.Types.ObjectId, ref: 'Instance', required: true },
  price: { type: Number, min: 0 },
  discount: { type: Number, min: 0, max: 1 },
});

ProductSchema.virtual('dicountPrice').get(function (this: Product) {
  if (this.price && this.discount) {
    return this.price * this.discount;
  }
  return 0;
});

ProductSchema.virtual('colorPrice').get(function (this: Product) {
  if (this.price && this.discount) {
    return this.discount === 1
      ? '#000000'
      : this.discount > 0.5
        ? '#008000'
        : '#ff0000';
  }
  return '#ff0000';
});
