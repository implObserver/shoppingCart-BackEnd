import { Response } from 'express';

declare global {
  namespace Express {
    interface Response {
      locals: {
        message?: string;
        error?: any;
      };
    }
  }
}