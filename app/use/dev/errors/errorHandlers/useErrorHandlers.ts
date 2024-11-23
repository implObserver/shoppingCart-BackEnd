import { NextFunction, Request, Response } from 'express';
import { app } from '../../../../app.ts';

export const handleDevErrors = () => {
  app.use((err: any, req: Request, res: Response) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    console.log(res.locals.error)
    res.status(err.status || 500);
  });
};
