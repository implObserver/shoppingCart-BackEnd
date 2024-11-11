import createError from 'http-errors';
import { app } from '../../../../app.ts';
import { NextFunction } from 'express';

export const catchNotFoundError = () => {
  app.use((next: NextFunction) => {
    next(createError(404));
  });
};
