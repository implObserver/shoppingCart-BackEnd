import { User } from "../../../mvc/models/user";
import { IUser } from "../../schemas/user/types/user";

interface BaseUserOptions {
    id?: string;
    email?: string;
    username?: string;
}

interface CommonUserOptions {
    refreshToken?: string;
    verifyCode?: string;
}

interface StatusUserOptions {
    isAdmin?: boolean;
    isVerified?: boolean;
    isAuthenticated?: boolean;
}

interface GetUserOptions extends BaseUserOptions, CommonUserOptions { }
interface SetStatusOptions extends StatusUserOptions { }
interface SetUserOptions extends CommonUserOptions { }

const getUser = async (options: GetUserOptions): Promise<IUser | null> => {
    try {
        const query: any = {};
        if (options.id !== undefined) query._id = options.id;
        if (options.email !== undefined) query.email = options.email;
        if (options.username !== undefined) query.username = options.username;
        if (options.refreshToken !== undefined) query.refreshToken = options.refreshToken;

        return await User.findOne(query).exec();
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(`Error fetching user: ${error.message}`);
        } else {
            throw new Error(`Error fetching user: Unknown error`);
        }
    }
};

const setStatus = async (userId: string, options: SetStatusOptions): Promise<IUser | null> => {
    try {
        const query: any = {};
        if (options.isAdmin !== undefined) query.isAdmin = options.isAdmin;
        if (options.isAuthenticated !== undefined) query.isAuthenticated = options.isAuthenticated;
        if (options.isVerified !== undefined) query.isVerified = options.isVerified;

        return await User.findByIdAndUpdate(
            userId,
            query,
            { new: true }
        );
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(`Error fetching user: ${error.message}`);
        } else {
            throw new Error(`Error fetching user: Unknown error`);
        }
    }
};

const setOptions = async (userId: string, options: SetUserOptions): Promise<IUser | null> => {
    try {
        const query: any = {};
        if (options.refreshToken !== undefined) query.refreshToken = options.refreshToken;
        if (options.verifyCode !== undefined) query.verifyCode = options.verifyCode;

        return await User.findByIdAndUpdate(
            userId,
            query,
            { new: true }
        );
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(`Error fetching user: ${error.message}`);
        } else {
            throw new Error(`Error fetching user: Unknown error`);
        }
    }
};

export const userQueries = {
    getUser,
    setStatus,
    setOptions,
}