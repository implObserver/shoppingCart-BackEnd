import createError from 'http-errors';
import { app } from '../../../../app.ts';
import { Request, Response, NextFunction } from 'express';

export const catchNotFoundError = () => {
  app.use((req: Request, res: Response, next: NextFunction) => {
    next(createError(404));
  });
};
