import passport from 'passport';
import { User } from '../../../../../../mvc/models/user.model.ts';

export const setDeserializeUser = () => {
  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findById(id); //for mongoDB
      done(null, user);
    } catch (err) {
      done(err);
    }
  });
};
