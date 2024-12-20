import { useAuthMiddleware } from './auth/index.ts';
import { useErrorsMiddleware } from './errors/index.ts';
import { useFilesMiddleware } from './files/index.ts';
import { useLoggingMiddleware } from './logging/index.ts';
import { useRequestParsersMiddleware } from './requestParsers/index.ts';
import { useRoutes } from './routes/useRoutes.ts';
import { useSecurityMiddlewares } from './security/index.ts';
import { useSession } from './session/useSession.ts';

export const useGlobalMiddlewares = () => {
  useSecurityMiddlewares();
  useSession();
  useAuthMiddleware();
  useLoggingMiddleware();
  useRequestParsersMiddleware();
  useFilesMiddleware();
  useRoutes();
  useErrorsMiddleware();
};
