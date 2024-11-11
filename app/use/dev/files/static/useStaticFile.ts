import { static as staticFile } from 'express';
import { join } from 'path';
import { app } from '../../../../app.ts';
import { __dirname } from '../../../../dirname/dirname.ts';

export const useStaticFileServe = () => {
  app.use(staticFile(join(__dirname, 'public')));
};
