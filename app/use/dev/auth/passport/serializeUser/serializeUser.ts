import passport from 'passport';

export const setSerializeUser = () => {
  passport.serializeUser((user: any, done) => {
    done(null, user.id);
  });
};
