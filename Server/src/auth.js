import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const compareHash = (data, encrypted) => bcrypt.compare(data, encrypted);

export const generateHash = (data, salt = 15) => {
  return bcrypt.hash(data, salt);
};

export const generateTokenFromUser = (user, options = { expiresIn: '30d' }) => {
  return jwt.sign({ user }, process.env.APP_SECRET, options);
};

const getUserIdFromAuthorization = authorization => {
  const token = authorization.substring(7, authorization.length);
  return jwt.verify(token, process.env.APP_SECRET)?.user?.id || null;
};

export const getUserIdRequest = ({ headers: { authorization } }) => {
  if (!authorization || !authorization.startsWith('Bearer ')) {
    return null;
  }
  return getUserIdFromAuthorization(authorization);
};

export const getUserIdConnection = ({ context }) => {
  if (!context || !context.Authorization) {
    return null;
  }
  return getUserIdFromAuthorization(context.Authorization);
};
