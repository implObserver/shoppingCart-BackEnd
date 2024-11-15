import asyncHandler from 'express-async-handler';
import { getAccessToken, getRefreshToken } from '../../../../../app/use/dev/auth/token/JWT/issueJWT.js';
import { NextFunction, Request, Response } from 'express';
import { userQueries } from '../../../../../database/queries/user/queries.js';
import { IUser } from '../../../../../database/schemas/user/types/user.js';

const failureProtected = (req: Request, res: Response) => {
    res.status(401).json({ message: 'unauthorized' });
};

const authProtected = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    if (req.isAuthenticated()) {
        const authUser = req.user as IUser;
        const user = await userQueries.setStatus(authUser.id, { isAuthenticated: true });
        const refreshToken = getRefreshToken(authUser.id).token;
        const accessToken = getAccessToken(authUser.id).token;

        await userQueries.setOptions(authUser.id, { refreshToken });

        res.locals.user = user;
        res.locals.refreshToken = refreshToken;
        res.locals.accessToken = accessToken;

        next();
    } else {
        res.status(401).json({ error: 'User is not authenticated' });
    }
});

const user_get = asyncHandler(async (req: Request, res: Response) => {
    const user = res.locals.user;

    res.json({
        user: {
            id: user.id,
            email: user.email,
            username: user.username,
            profile: user.profile,
        },
    });
});

const confirm_email = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const refreshToken = req.query.refreshToken as string | undefined;
        const verifyCode = req.query.verifyCode;
        const user = await userQueries.getUser({ refreshToken });
        if (!user) {
            res.status(400).send('Пользователь не найден');
        } else if (user.verifyCode !== verifyCode) {
            res.status(400).send('Неверная ссылка');
        } else {
            await userQueries.setStatus(user.id, { isVerified: true });
        }
        next();
    } catch {
        res.status(400).send('Что-то пошло не так. Пожалуйста, повторите позже.');
    }
});

const refresh_accessToken = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const tokens = req.cookies;
    const refreshToken = tokens?.refreshToken;

    if (!refreshToken) {
        res.status(401).send({ error: 'Refresh token is required.' });
    }

    const user = await userQueries.getUser({ refreshToken });

    if (!user) {
        res.status(401).send({ error: 'Invalid refresh token.' });
    } else if (!user.isAuthenticated) {
        res.sendStatus(401);
    } else {
        const accessToken = getAccessToken(user.id).token;
        res.locals.user = user;
        res.locals.refreshToken = refreshToken;
        res.locals.accessToken = accessToken;
        next();
    }
});

const refresh_refreshToken = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const tokens = req.cookies;
    const refreshToken = tokens.refreshToken;

    if (!refreshToken)
        res.status(401).send({ error: 'Ошибка авторизации' });

    const user = await userQueries.getUser({ refreshToken });

    if (!user) {
        res.sendStatus(401);
    } else if (!user.isAuthenticated) {
        res.sendStatus(401);
    } else {
        const newRefreshToken = getRefreshToken(user.id).token;
        const accessToken = getAccessToken(user.id).token;
        await userQueries.setOptions(user.id, { refreshToken: newRefreshToken });

        res.locals.user = user;
        res.locals.refreshToken = newRefreshToken;
        res.locals.accessToken = accessToken;
        next();
    }
});

export const getController = {
    failureProtected,
    user_get,
    authProtected,
    confirm_email,
    refresh_accessToken,
    refresh_refreshToken,
};
