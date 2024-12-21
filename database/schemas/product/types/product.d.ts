import { Document } from "mongoose";

export interface IProduct extends Document {
    name: string;
    description: string;
    price: number;
    discount?: number;
    category: Schema.Types.ObjectId | ICategory; // Категория, к которой относится продукт
    imageUrl?: string; // URL изображения
}

export interface IProductInstance extends Document {
    product: Schema.Types.ObjectId | IProduct; // Продукт, к которому относится экземпляр
    serialNumber: string; // Серийный номер или уникальный идентификатор экземпляра
    status: 'Available' | 'Sold' | 'Not Available'; // Статус экземпляра
}