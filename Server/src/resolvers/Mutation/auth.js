import { compareHash, generateHash, generateTokenFromUser } from '../../auth';

class LoginError extends Error {
  constructor(message = 'Invalid username or password!') {
    super(message);
  }
}

export async function login(_, args, { db }) {
  const user = await db.query.user(
    { where: { accountName: args.accountName } },
    '{ id password accountName role }'
  );
  return compareHash(args.password, user.password)
    .then(validPassword => {
      if (!validPassword) {
        throw new LoginError();
      }
      const expiresIn = args.rememberMe ? '365d' : '30d';
      const options = { expiresIn };
      return generateTokenFromUser(user, options);
    })
    .then(token => ({ token, user }));
}

export async function register(_, args, { db }) {
  console.log('register');
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
