import { NextFunction, Request, Response } from 'express';
import { app } from '../../../app.ts';

export const handleDevErrors = () => {
  app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500);
    res.render('error');
  });
};
