import { json } from 'express';
import { app } from '../../../app.ts';

export const useJSONParser = () => {
  app.use(json());
};
