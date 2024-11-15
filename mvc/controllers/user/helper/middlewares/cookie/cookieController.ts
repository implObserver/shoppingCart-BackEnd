import { NextFunction, Request, Response } from 'express';
import asyncHandler from 'express-async-handler';

const set_cookie = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const user = res.locals.user;
  const refreshToken = res.locals.refreshToken;
  const accessToken = res.locals.accessToken;

  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: 'none',
  });

  res.cookie('accessToken', accessToken, {
    httpOnly: true,
    secure: true,
    sameSite: 'none',
  });

  res.cookie('user_id', user.id, {
    sameSite: 'none',
  });
  
  console.log('Cookies set:', {
    refreshToken: refreshToken,
    accessToken: accessToken,
    user_id: user.id,
  });

  next();
});

export const cookieMiddlewares = {
  set_cookie,
};
