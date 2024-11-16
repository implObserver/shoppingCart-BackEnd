import mongoose, { Document } from "mongoose";

interface IProfile extends Document {
    user: mongoose.Types.ObjectId,
    avatar: string,
    name: string,
    gender: string,
    age: string
}