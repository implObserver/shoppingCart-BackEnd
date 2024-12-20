import { setDeserializeUser } from './deserializeUser/deserializeUser.ts';
import { setSerializeUser } from './serializeUser/serializeUser.ts';
import { usePassportSession } from './usePassportSession/usePassportSession.ts';
import { useJWTStrategy } from './useStrategy/useJWTStrategy/useJWTStrategy.ts';
import { useLocalStrategy } from './useStrategy/useLocalStrategy/useLocalStrategy.ts';

export const usePassport = () => {
  usePassportSession();
  setSerializeUser();
  setDeserializeUser();
  useLocalStrategy();
  useJWTStrategy();
};
