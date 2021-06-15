import { Context } from 'koa';
import { JwtUserRole, JwtUserType } from './types';

export interface ContextResponse {
  status: number;
  body: any;
  headers?: any | null;
}

export interface JwtUserData {
  id: number;
  type: JwtUserType;
  email?: string;
  role?: JwtUserRole;
}

export interface RacketsContext {
  user?: JwtUserData;
  rawToken?: string;
}

export interface RouteAction {
  path: string;
  method: 'POST' | 'GET' | 'PUT' | 'DELETE' | 'HEAD' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH';
  middlewares: Array<(ctx: Context, next?: Function) => any>;
  callback: (ctx: Context, user?: RacketsContext) => Promise<ContextResponse>;
}

export interface JwtPair {
  access_token: string;
  refresh_token: string;
}