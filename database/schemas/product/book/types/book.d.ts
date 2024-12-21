import { Document } from "mongoose";

export interface ILifeSpan {
    born: Date | null;
    died: Date | null;
}

export interface IAuthor extends Document {
    first_name: string;
    family_name: string;
    lifespan?: ILifeSpan;
}

export interface IGenre extends Document {
    name: string,
}

export interface IBook extends Document {
    title: string,
    author: mongoose.Types.ObjectId | IAuthor,
    summary: string,
    isbn: string,
    genre: mongoose.Types.ObjectId[] | IGenre[],
}

export interface IBookInstance extends Document {
    book: mongoose.Types.ObjectId,
    imprint: string,
    status: string,
}