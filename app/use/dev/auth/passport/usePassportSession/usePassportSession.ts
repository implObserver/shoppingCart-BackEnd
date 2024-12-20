import passport from 'passport';
import { app } from '../../../../../app.ts';

export const usePassportSession = () => {
  app.use(passport.session());
};
