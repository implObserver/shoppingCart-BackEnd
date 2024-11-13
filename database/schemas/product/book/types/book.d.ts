import { Document } from "mongoose";

interface ILifeSpan {
    born: Date | null;
    died: Date | null;
}

interface IAuthor extends Document {
    first_name: string;
    family_name: string;
    lifespan?: LifeSpan;
}

interface IGenre extends Document {
    name: string,
}

interface IBook extends Document {
    title: string,
    author: mongoose.Types.ObjectId,
    summary: string,
    isbn: string,
    genre: mongoose.Types.ObjectId,
}

interface IBookInstance extends Document {
    book: mongoose.Types.ObjectId,
    imprint: string,
    status: string,
}