import { useStaticFileServe } from './static/useStaticFile.ts';

export const useFilesMiddleware = () => {
  useStaticFileServe();
};
