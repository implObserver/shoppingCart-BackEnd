import { indexRouter } from '../../../../routes/index.ts';
import { app } from '../../../app.ts';

export const useRoutes = () => {
  app.use(indexRouter);
};
