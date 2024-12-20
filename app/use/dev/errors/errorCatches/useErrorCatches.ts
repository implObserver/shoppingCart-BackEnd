import { app } from '../../../../app.ts';
import { Request, Response, NextFunction } from 'express';

export const catchNotFoundError = () => {
  app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({ error: 'Упс! Ничего не найдено!' });
    next();
  });
};
