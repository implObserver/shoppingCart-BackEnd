import asyncHandler from 'express-async-handler';
import nodemailer, { Transporter } from 'nodemailer';
import crypto from 'crypto';
import 'dotenv/config';
import { Request, Response } from 'express';
import { userQueries } from '../../../../../../database/queries/user/queries.ts';

const transporter: Transporter = nodemailer.createTransport({
  host: 'smtp.yandex.ru',
  port: 465,
  secure: true,
  auth: {
    user: process.env.YANDEX_USER, // ваш адрес на Яндекс Почте
    pass: process.env.YANDEX_PASSWORD, // пароль от почты
  },
});

// Функция для отправки почты
const send_email = asyncHandler(async (req: Request, res: Response) => {
  const { user, refreshToken } = res.locals;

  const id = user.id;
  const email = user.email;
  const secretKey = crypto.randomBytes(16).toString('hex');

  await userQueries.setOptions(id, { verifyCode: secretKey });
  const url = `${process.env.API_URL}/api/confirm-email?refreshToken=${refreshToken}&key=${secretKey}`;

  try {
    await transporter.sendMail({
      from: process.env.YANDEX_USER,
      to: email,
      subject: 'Подтвердите свой адрес электронной почты',
      html: `Подтвердите свою почту, перейдя по этой <a href="${url}">ссылке</a>`,
    });
  } catch (error) {
    console.error(error);
  }

  res.status(403).send({
    error: 'Ваш электронный адрес не подтвержден. Пожалуйста, проверьте свою почту.',
  });
});

export const transporterMiddlewares = {
  send_email,
};
