import passport from 'passport';

export const setSerializeUser = () => {
  passport.serializeUser((user: any, done) => {
    console.log(`${user} wtf`)
    done(null, user.id);
  });
};
