import { usePassport } from './passport/index';

export const useAuthMiddleware = () => {
  usePassport();
};
