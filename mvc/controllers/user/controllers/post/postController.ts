import { body, validationResult } from 'express-validator';
import asyncHandler from 'express-async-handler';
import passport from 'passport';
import bcrypt from 'bcryptjs';
import { validateUsernameOrMail } from '../../helper/middlewares/validate/usernameOrMailValidation.ts';
import { getRefreshToken } from '../../../../../app/use/dev/auth/token/JWT/issueJWT.ts';
import { NextFunction, Request, Response } from 'express';
import { userQueries } from '../../../../../database/queries/user/queries.ts';
import { IUser } from '../../../../../database/schemas/user/types/user';

interface AuthInfo {
    message?: string;
    error?: string;
    status?: number;
}

const user_create_post = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    console.log('1')
    await Promise.all([
        body('username')
            .trim()
            .isLength({ min: 3 })
            .withMessage('Username must be at least 3 characters long.')
            .matches(/^[a-zA-Z0-9_]+$/)
            .withMessage('Username must contain only letters, numbers, and underscores.')
            .escape()
            .run(req),
        body('email').isEmail().withMessage('Invalid email address.').run(req),
        body('password')
            .trim()
            .isLength({ min: 8 })
            .withMessage('Password must be specified.')
            .escape()
            .run(req),
    ]);
    console.log('2')
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ error: errors.array()[0].msg });
    }
    console.log('3')
    const hashPassword = await bcrypt.hash(req.body.password, 10);
    const userPg = {
        username: req.body.username,
        email: req.body.email,
        password: hashPassword,
    };
    const checkEmail = await userQueries.getUser({ email: userPg.email });
    const checkUsername = await userQueries.getUser({ username: userPg.username });
    if (checkEmail || checkUsername) {
        res.status(403).json({ error: 'Такой пользователь уже существует' });
    }
    console.log('4')
    const id = await userQueries.createUser(userPg);
    if (id) {
        const refreshToken = getRefreshToken(id).token;
        const user = await userQueries.setOptions(id, { refreshToken });
        console.log('5')
        res.locals.user = user;
        res.locals.refreshToken = refreshToken;
        next();
    } else {
        res.status(500).json({ error: 'Не удалось создать пользователя.' });
    }
});

const user_auth_post = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await Promise.all([
        body('identifier').custom(validateUsernameOrMail).run(req),
        body('password')
            .trim()
            .isLength({ min: 1 })
            .withMessage('Password must be specified.')
            .escape()
            .run(req),
    ]);

    // Получаем ошибки валидации
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ error: errors.array()[0].msg });
    }

    // Аутентификация пользователя
    passport.authenticate('local', (err: Error | null, user: Express.User | false, info: AuthInfo) => {
        if (err) {
            console.error('Authentication error 1:', err);
            res.status(500).json({ error: 'Internal server error' });
        }
        if (!user) {
            res.status(info.status || 400).json({ error: info.error || info.message });
        }
        req.logIn(user, (loginErr) => {
            if (loginErr) {
                console.error('Authentication error 2:', loginErr);
                res.status(500).json({ error: 'Login failed' });
            }
            console.log('Successfully authenticated:');
            next();
        });
    })(req, res, next);
});

const user_logout_post = asyncHandler(async (req: Request, res: Response) => {
    const user = req.user as IUser;
    await userQueries.logoutUser(user.id);
    res.clearCookie('accessToken');
    res.clearCookie('refreshToken');
    res.clearCookie('user_id');
    res.clearCookie('connect.sid', { path: '/' });
    res.json({ res: 'logout' });
});

const user_auth_jwt_protected = async (req: Request, res: Response, next: NextFunction) => {
    try {
        passport.authenticate('jwt', {
            session: false,
        })(req, res, next);
    } catch (err) {
        console.log(err);
    }
};

export const postController = {
    user_create_post,
    user_auth_post,
    user_logout_post,
    user_auth_jwt_protected,
};