import asyncHandler from 'express-async-handler';
import { Request, Response } from 'express';

const redirect_main = asyncHandler(async (req: Request, res: Response) => {
  res.redirect(process.env.SHOP_URL as string);
});

const redirect_succesfull_email_verify = asyncHandler(async (req: Request, res: Response) => {
  res.redirect(`${process.env.SHOP_URL}/succesfullEmailVerify` as string);
});

export const redirectMiddlewares = {
  redirect_main,
  redirect_succesfull_email_verify,
};
