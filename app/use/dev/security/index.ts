import { useCORS } from './useCORS/useCORS.ts';

export const useSecurityMiddlewares = () => {
  useCORS();
};
