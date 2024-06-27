import { app } from '../../app.js';
import session from "express-session";

export const useSession = () => {
    app.use(session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: true
    }));
}