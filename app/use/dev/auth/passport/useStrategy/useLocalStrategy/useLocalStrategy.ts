import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import bcrypt from 'bcryptjs';
import validator from 'validator';
import { IUser } from '../../../../../../../database/schemas/user/types/user.ts';
import { userQueries } from '../../../../../../../database/queries/user/queries.ts';

const verifyCallbackPg = async (identifier: string, password: string, done: (error: Error | null, user?: IUser | false, info?: any) => void) => {
  try {
    let user: IUser | null;
    const isEmail = validator.isEmail(identifier);
    user = isEmail
      ? await userQueries.getUser({ email: identifier })
      : await userQueries.getUser({ username: identifier });
    if (!user) {
      console.log('Incorrect email or username');
      return done(null, false, {
        message: 'Incorrect email or username',
        status: 401,
      });
    }

    if (!user.isVerified) {
      console.log('Почтовый ящик не подтвержден');
      return done(null, false, {
        message: 'Почтовый ящик не подтвержден',
        status: 403,
      });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return done(null, false, {
        message: 'Incorrect password',
        status: 401,
      });
    }

    return done(null, user);
  } catch (err) {
    console.log('catch');
    console.log(err);

    if (err instanceof Error) {
      return done(err);
    }

    return done(new Error("An unknown error occurred"));
  }
};

const strategy = new LocalStrategy(
  {
    usernameField: 'identifier',
  },
  verifyCallbackPg
);

export const useLocalStrategy = () => {
  passport.use(strategy);
};
