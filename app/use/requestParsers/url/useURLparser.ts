import { urlencoded } from 'express';
import { app } from '../../../app.ts';

export const useURLParser = () => {
  app.use(urlencoded({ extended: false }));
};
