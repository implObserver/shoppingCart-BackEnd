import { Router } from 'express';
import { userRouter } from './components/user.ts';
export const apiRouter = Router();

apiRouter.use('/api', userRouter);