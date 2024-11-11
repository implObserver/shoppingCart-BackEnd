import { Document } from "mongoose";

interface IUser extends Document {
    id: number,
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