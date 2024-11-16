import mongoose, { Model } from "mongoose";
import { IProfile } from "../../database/schemas/profile/types/profile";
import { ProfileSchema } from "../../database/schemas/profile/profile";

export const Profile: Model<IProfile> = mongoose.model<IProfile>('Profile', ProfileSchema);