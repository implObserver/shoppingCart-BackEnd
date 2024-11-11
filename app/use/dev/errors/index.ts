import { catchNotFoundError } from './errorCatches/useErrorCatches.ts';
import { handleDevErrors } from './errorHandlers/useErrorHandlers.ts';

export const useErrorsMiddleware = () => {
  catchNotFoundError();
  handleDevErrors();
};
