import * as jwt from 'jsonwebtoken';
import { JwtPair, JwtUserData } from 'src/types/interfaces';
import { JwtUserRole } from 'src/types/types';
import { SETTINGS } from '../settings';

function addExpIat(expiration: number) {
  const iat: number = Math.floor(Date.now() / 1000);
  return {
    exp: iat + expiration,
    iat,
  };
}

function customToken(payload: JwtUserData, expiration: number): string {
  return jwt.sign(
    { ...payload, ...addExpIat(expiration) },
    SETTINGS.JWT_PRIVATE_KEYFILE,
    {
      algorithm: SETTINGS.JWT_USED_ALGORITHM,
    },
  );
}

interface createJWTPairData {
  email: string;
  id: number;
  role: JwtUserRole;
  refresh_token?: string;
}
export function createJWTPair(data: createJWTPairData): JwtPair {
  return {
    access_token: createToken(data.email, data.id, data.role),
    refresh_token: data.refresh_token || createRefreshToken(data.id),
  };
}

export function createEmailActivationToken(id: number): string {
  return jwt.sign({ id }, SETTINGS.JWT_PRIVATE_KEYFILE, {
    algorithm: SETTINGS.JWT_USED_ALGORITHM,
  });
}

export function createToken(
  email: string,
  id: number,
  role: JwtUserRole = 'user',
): string {
  return customToken(
    { email, id, type: 'access', role: role },
    SETTINGS.JWT_ACCESS_LIFETIME_SECONDS,
  );
}

export function verifyAndGetToken(token: string): JwtUserData {
  try {
    return jwt.verify(token, SETTINGS.JWT_PRIVATE_KEYFILE, {
      algorithms: [SETTINGS.JWT_USED_ALGORITHM],
    }) as JwtUserData;
  } catch (error) {
    console.error('JWT verification failed', error);
    return null;
  }
}

export function createRefreshToken(id: number): string {
  return customToken(
    { id, type: 'refresh' },
    SETTINGS.JWT_REFRESH_LIFETIME_SECONDS,
  );
}