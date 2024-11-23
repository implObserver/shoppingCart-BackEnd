import mongoose, { Model } from "mongoose";
import { UserSchema } from "../../database/schemas/user/user.ts";
import { IUser } from "../../database/schemas/user/types/user";

export const User: Model<IUser> = mongoose.model<IUser>('User', UserSchema);