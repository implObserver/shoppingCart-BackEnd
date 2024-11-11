import cookieParser from 'cookie-parser';
import { app } from '../../../../app';

export const useCookieParser = () => {
  app.use(cookieParser());
};
