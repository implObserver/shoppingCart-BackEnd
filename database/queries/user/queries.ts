import { User } from "../../../mvc/models/user"; // Импортируйте вашу модель User и интерфейс IUser
import { IUser } from "../../schemas/user/types/user";

// Получение пользователя по ID
export const getUserById = async (id: string): Promise<IUser | null> => {
    try {
        return await User.findById(id).exec(); // Используйте exec() для получения Promise
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(`Error fetching user by ID: ${error.message}`);
        } else {
            throw new Error(`Error fetching user by ID: Unknown error`);
        }
    }
};

// Получение пользователя по email
export const getUserByEmail = async (email: string): Promise<IUser | null> => {
    try {
        return await User.findOne({ email }).exec(); // Используйте exec() для получения Promise
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(`Error fetching user by email: ${error.message}`);
        } else {
            throw new Error(`Error fetching user by email: Unknown error`);
        }
    }
};

// Получение пользователя по username
export const getUserByUsername = async (username: string): Promise<IUser | null> => {
    try {
        return await User.findOne({ username }).exec(); // Используйте exec() для получения Promise
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(`Error fetching user by username: ${error.message}`);
        } else {
            throw new Error(`Error fetching user by username: Unknown error`);
        }
    }
};