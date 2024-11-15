import { Document } from "mongoose";

interface IUser extends Document {
    _id: mongoose.Types.ObjectId;
    email: string;
    username: string;
    password: string;
    isAdmin: boolean;
    isVerified: boolean;
    isAuthenticated: boolean;
    refreshToken: string;
    verifyCode?: string;
    createdAt: Date;
}