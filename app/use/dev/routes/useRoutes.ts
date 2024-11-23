import { apiRouter } from '../../../../routes/api/api.ts';
import { app } from '../../../app.ts';

export const useRoutes = () => {
  app.use(apiRouter);
};
