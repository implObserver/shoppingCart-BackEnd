import { User } from "../../../mvc/models/user";
import { IUser } from "../../schemas/user/types/user";

export const getUserById = async (id: string): Promise<IUser | null> => {
    try {
        return await User.findById(id).exec();
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(`Error fetching user by ID: ${error.message}`);
        } else {
            throw new Error(`Error fetching user by ID: Unknown error`);
        }
    }
};

export const getUserByEmail = async (email: string): Promise<IUser | null> => {
    try {
        return await User.findOne({ email }).exec();
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(`Error fetching user by email: ${error.message}`);
        } else {
            throw new Error(`Error fetching user by email: Unknown error`);
        }
    }
};

export const getUserByUsername = async (username: string): Promise<IUser | null> => {
    try {
        return await User.findOne({ username }).exec();
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(`Error fetching user by username: ${error.message}`);
        } else {
            throw new Error(`Error fetching user by username: Unknown error`);
        }
    }
};