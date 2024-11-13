import { Document } from "mongoose";

interface LifeSpan {
    born: Date | null;
    died: Date | null;
}

interface Author extends Document {
    first_name: string;
    family_name: string;
    lifespan?: LifeSpan;
}

interface Genre extends Document {
    name: string,
}

interface Book extends Document {
    title: string,
    author: mongoose.Types.ObjectId,
    summary: string,
    isbn: string,
    genre: mongoose.Types.ObjectId,
}

interface BookInstance extends Document {
    book: mongoose.Types.ObjectId,
    imprint: string,
    status: string,
}