import { Router } from 'express';
import { userControllers } from '../../../mvc/controllers/user';


export const userRouter = Router();

userRouter.post(
    '/user/signup',
    userControllers.user_create_post,
    userControllers.send_email
);

userRouter.post(
    '/user/login',
    userControllers.user_auth_post,
    userControllers.authProtected,
    userControllers.set_cookie,
    userControllers.user_get
);

userRouter.get(
    '/user/fastlogin',
    userControllers.user_auth_jwt_protected,
    userControllers.authProtected,
    userControllers.set_cookie,
    userControllers.user_get
);

userRouter.post(
    '/user/logout',
    userControllers.user_auth_jwt_protected,
    userControllers.user_logout_post
);

userRouter.get(
    '/user/refresh-access-token',
    userControllers.refresh_accessToken,
    userControllers.set_cookie,
    userControllers.user_get
);

userRouter.get(
    '/user/refresh-refresh-token',
    userControllers.refresh_refreshToken,
    userControllers.set_cookie,
    userControllers.user_get
);

userRouter.get('/user/protected', userControllers.user_auth_jwt_protected);

userRouter.get('/user/failure', userControllers.failureProtected);

userRouter.get(
    '/confirm-email/',
    userControllers.confirm_email,
    userControllers.redirect_succesfull_email_verify
);