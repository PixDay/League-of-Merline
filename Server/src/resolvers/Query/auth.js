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