import { app } from '../../app.ts';
import session from 'express-session';

export const useSession = () => {
  app.use(
    session({
      secret: process.env.SESSION_SECRET || 'default_secret',
      resave: false,
      saveUninitialized: true,
    }),
  );
};
