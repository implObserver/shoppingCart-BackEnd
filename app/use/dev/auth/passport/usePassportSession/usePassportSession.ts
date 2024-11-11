import passport from 'passport';
import { app } from '../../../../../app';

export const usePassportSession = () => {
  app.use(passport.session());
};
