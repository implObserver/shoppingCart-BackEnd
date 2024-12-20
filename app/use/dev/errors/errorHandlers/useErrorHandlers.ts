import { NextFunction, Request, Response } from 'express';
import { app } from '../../../../app.ts';

export const handleDevErrors = () => {
  app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    const status = err.status || 500;
    const message = err.message || 'Что-то пошло не так!';

    if (req.app.get('env') === 'development') {
      // Логирование ошибки в консоль для разработки
      console.error(`Ошибка ${status}: ${message}`);
      console.error(err.stack);
    }

    // Ответ с ошибкой в формате JSON
    res.status(status).json({
      error: {
        status,
        message,
      },
    });
  });
};
