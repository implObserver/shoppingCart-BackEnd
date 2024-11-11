import mongoose from 'mongoose';
import { IUser } from './types/user';

const Schema = mongoose.Schema;

export const UserSchema = new Schema<IUser>({
  email: { type: String, unique: true, sparse: true },
  username: { type: String, unique: true, sparse: true },
  password: { type: String },
  isAdmin: { type: Boolean, default: false },
  isVerified: { type: Boolean, default: false },
  isAuthenticated: { type: Boolean, default: false },
  refreshToken: { type: String },
  verifyCode: { type: String },
});
