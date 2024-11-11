import { useErrorsMiddleware } from './errors/index.ts';
import { useFilesMiddleware } from './files/index.ts';
import { useLoggingMiddleware } from './logging/index.ts';
import { useRequestParsersMiddleware } from './requestParsers/index.ts';
import { useRoutes } from './routes/useRoutes.ts';
import { useSession } from './session/useSession.ts';

export const useGlobalMiddlewares = () => {
  useSession();
  useLoggingMiddleware();
  useRequestParsersMiddleware();
  useFilesMiddleware();
  useRoutes();
  useErrorsMiddleware();
};
