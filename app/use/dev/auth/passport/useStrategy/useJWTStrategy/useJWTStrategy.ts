import passport from 'passport';
import { Strategy as JwtStrategy, StrategyOptions, VerifiedCallback } from 'passport-jwt';
import fs from 'fs';
import { __pathToKeyFolder } from './keypair/generateKeypair.ts';
import path from 'path';
import { Request } from 'express';
import { userQueries } from '../../../../../../../database/queries/user/queries.ts';
import { JwtPayload } from 'jsonwebtoken';

const pathToKey = path.join(__pathToKeyFolder, 'id_rsa_pub.pem');
const PUB_KEY = fs.readFileSync(pathToKey, 'utf8');

const cookieExtractor = (req: Request) => {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies['accessToken'];

    // Проверка, есть ли токен и не является ли он undefined
    if (token && typeof token === 'string' && token.startsWith('Bearer ')) {
      return token.slice(7); // Удаляем 'Bearer ' из токена
    } else if (token) {
      return token; // Если токен не начинается с 'Bearer ', просто возвращаем его
    }
  }
  return token; // Если токен не найден, возвращаем null
};

const options: StrategyOptions = {
  jwtFromRequest: cookieExtractor,
  secretOrKey: PUB_KEY,
  algorithms: ['RS256'],
  passReqToCallback: true,
};

const verifyCallbackPg = async (req: Request, payload: JwtPayload, done: VerifiedCallback) => {
  try {
    const refreshToken = req.cookies['refreshToken'];
    const user = await userQueries.getUser({ id: payload.sub });
    if (!user) {
      return done(null, false);
    }
    console.log(user.refreshToken !== refreshToken);
    if (user.refreshToken !== refreshToken) {
      return done(null, false);
    }
    return done(null, user);
  } catch (err) {
    return done(err);
  }
};

const strategy = new JwtStrategy(options, verifyCallbackPg);

export const useJWTStrategy = () => {
  passport.use(strategy);
};
