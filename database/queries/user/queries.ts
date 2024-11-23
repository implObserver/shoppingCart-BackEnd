import { Profile } from "../../../mvc/models/profile.ts";
import { User } from "../../../mvc/models/user.ts";
import { IUser } from "../../schemas/user/types/user.ts";

interface BaseUserOptions {
    id?: string;
    email?: string;
    username?: string;
    password?: string;
}

interface CommonUserOptions {
    refreshToken?: string | null;
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

const createUser = async (user: BaseUserOptions): Promise<string | void> => {
    let newUser;
    try {
        newUser = await User.create({
            email: user.email,
            username: user.username,
            password: user.password,
            isAdmin: false,
        });

        await Profile.create({
            user: newUser._id,
            avatar: 'https://blog-api-store.storage.yandexcloud.net/user-avatars/default/default.svg',
        });

        return newUser._id.toString();
    } catch (error) {
        if (newUser) {
            await User.findByIdAndDelete(newUser._id);
        }
        console.error(error);
    }
};

const logoutUser = async (userId: string) => {
    await setStatus(userId, { isAuthenticated: false });
    await setOptions(userId, { refreshToken: null });
}

export const userQueries = {
    getUser,
    setStatus,
    setOptions,
    createUser,
    logoutUser,
}