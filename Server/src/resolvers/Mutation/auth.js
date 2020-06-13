import { compareHash, generateHash, generateTokenFromUser } from '../../auth';

class LoginError extends Error {
  constructor(message = 'Invalid username or password!') {
    super(message);
  }
}

export async function register(_, args, { db }) {
  const password = await generateHash(args.password);

  const data = { ...args, password };
  const user = await db.mutation.createUser({ data }, '{ id accountName }');

  return new Promise(resolve =>
    resolve({
      token: generateTokenFromUser(user),
      user,
    })
  );
}

export async function resetPassword(
  root,
  { newPassword, where },
  { db },
  info
) {
  const args = {
    data: { password: await generateHash(newPassword) },
    where,
  };
  return db.mutation.updateUser(args, info);
}
