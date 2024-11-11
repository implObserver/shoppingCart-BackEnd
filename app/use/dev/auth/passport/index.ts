import { setDeserializeUser } from './deserializeUser/deserializeUser';
import { setSerializeUser } from './serializeUser/serializeUser';
import { usePassportSession } from './usePassportSession/usePassportSession';
import { useJWTStrategy } from './useStrategy/useJWTStrategy/useJWTStrategy';
import { useLocalStrategy } from './useStrategy/useLocalStrategy/useLocalStrategy';

export const usePassport = () => {
  usePassportSession();
  setSerializeUser();
  setDeserializeUser();
  useLocalStrategy();
  useJWTStrategy();
};
