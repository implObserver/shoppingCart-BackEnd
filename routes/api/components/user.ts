import { Router } from 'express';
import { userControllers } from '../../../mvc/controllers/user/index.ts';

export const userRouter = Router();

userRouter.post(
    '/user/signup',
    userControllers.user_create_post,

);
