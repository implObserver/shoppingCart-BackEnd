import logger from 'morgan';
import { app } from '../../../../app.ts';

export const useMorgan = () => {
  app.use(logger('dev'));
};
