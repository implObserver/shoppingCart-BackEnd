import { useMorgan } from './morgan/useMorgan.ts';

export const useLoggingMiddleware = () => {
  useMorgan();
};
