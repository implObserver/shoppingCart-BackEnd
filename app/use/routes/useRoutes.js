import { indexRouter } from '../../../routes/index.js';
import { app } from '../../app.js';

export const useRoutes = () => {
  app.use(indexRouter);
};
