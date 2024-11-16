import { Schema } from 'mongoose';
import { IProfile } from './types/profile';

export const ProfileSchema = new Schema<IProfile>({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    avatar: { type: String },
    name: { type: String },
    gender: { type: String },
    age: { type: String },
});
