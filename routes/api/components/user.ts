import { Router } from 'express';
import { userControllers } from '../../../mvc/controllers/user/index.ts';

export const userRouter = Router();

userRouter.post(
    '/user/login',
    userControllers.user_auth_post,
    userControllers.send_email,
    userControllers.authProtected,
    userControllers.set_cookie,
    userControllers.user_get
)

userRouter.post(
    '/user/signup',
    userControllers.user_create_post,
    userControllers.send_email
);

userRouter.get(
    '/confirm-email/',
    userControllers.confirm_email,
    userControllers.redirect_succesfull_email_verify
);
