import { useJSONParser } from './json/useJSONparser.ts';
import { useURLParser } from './url/useURLparser.ts';

export const useRequestParsersMiddleware = () => {
  useJSONParser();
  useURLParser();
};
