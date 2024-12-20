import { usePassport } from './passport/index.ts';

export const useAuthMiddleware = () => {
  usePassport();
};
