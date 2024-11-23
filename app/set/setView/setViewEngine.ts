import { join } from 'path';
import { app } from '../../app.ts';
import { __dirname } from '../../dirname/dirname.ts';

// view engine setup
export const setViewEngine = () => {
  app.set('views', join(__dirname, 'mvc', 'views'));
  app.set('view engine', 'pug');
};
