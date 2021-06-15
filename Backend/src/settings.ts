import * as fs from 'fs';

interface EnvConfigEntry {
  help: string;
  default?: any;
  callback?: (value: string) => any;
  debug_display_callback?: (
    config: EnvConfigEntry,
    key: string,
    value: string,
  ) => any;
}

const ENV_CONF: { [id: string]: EnvConfigEntry } = {
  HOST_ADDRESS: {
    help: 'IP or URL of the backend server',
    default: 'http://localhost:8080',
  },
  DATABASE_DIALECT: {
    help: 'The dialect of the database see https://sequelize.org/master/manual/getting-started.html',
    default: 'postgres',
  },
  DATABASE_NAME: {
    help: 'The name of the database',
    default: 'rackets',
  },
  DATABASE_HOST: {
    help: 'The host address of the database',
  },
  DATABASE_USER: {
    help: 'The root username for the database',
  },
  DATABASE_PASSWORD: {
    help: 'The root password for the database',
  },
  PORT: {
    help: 'The port on which will run the servers',
    default: 8080,
  },
  DEBUG: {
    callback: (value: string) => {
      return value ? value.toLowerCase() === 'true' : false;
    },
    help: 'Set to True to enable debug informations',
    default: false,
  },
  SALT_ROUNDS: {
    callback: (value: string) => parseInt(value),
    help: 'Salt rounds to hash the password of accounts',
    default: 10,
  },
  JWT_PRIVATE_KEYFILE: {
    debug_display_callback: (config: EnvConfigEntry, key: string, value: any) =>
      process.env[key] || config.default,
    callback: (value: string) => fs.readFileSync(value, { encoding: 'utf-8' }),
    help: 'The private key, used to generate JWT. You can generate a pair with:\n\t$ ssh-keygen -t rsa -b 4096 -m PEM -f <filename>',
    default: 'rackets_id_rsa',
  },
  JWT_PUBLIC_KEYFILE: {
    debug_display_callback: (config: EnvConfigEntry, key: string, value: any) =>
      process.env[key] || config.default,
    callback: (value: string) => fs.readFileSync(value, { encoding: 'utf-8' }),
    help: 'The public key, used to read JWT. Paired with the private key.',
    default: 'rackets_id_rsa.pub',
  },
  JWT_ACCESS_LIFETIME_SECONDS: {
    callback: (value: string) => parseInt(value),
    help: 'The lifetime of JWT access tokens, in seconds',
    default: 3600,
  },
  JWT_REFRESH_LIFETIME_SECONDS: {
    callback: (value: string) => parseInt(value),
    help: 'The lifetime of JWT refresh tokens, in seconds',
    default: 36000,
  },
  JWT_USED_ALGORITHM: {
    help: 'Encryption algorithm used for JWT signature, can be: HS256 | HS384 | HS512 | RS256 | RS384 | RS512 | ES256 | ES384 | ES512 | PS256 | PS384 | PS512 | none',
    default: 'RS256',
  },
  RESET_CODE_EXPIRATION: {
    help: 'Expiration time in second of a reset password code',
    default: 300,
  },
  MAIL_SERVICE: {
    help: 'The email provider ex: gmail, yahoo, outlook',
    default: 'gmail',
  },
  MAIL_SERVICE_USERNAME: {
    help: 'The email account login field ex: test@gmail.com',
  },
  MAIL_SERVICE_PASSWORD: {
    help: 'The email account password field',
  },
  ADMINS: {
    callback: (value: string) => value.split(','),
    help: 'Admin emails, separated by a commas',
    default: '',
  },
};

let prior_settings: { [id: string]: any } = {};

for (const [key, value] of Object.entries(ENV_CONF)) {
  let env_value: string = process.env[key];
  if (env_value === undefined) {
    if (!('default' in value)) {
      console.error(`${key} (${value.help}) not found in env`);
      process.exit(1);
    } else {
      env_value = value.default;
    }
  }
  if ('callback' in value && env_value !== undefined) {
    env_value = value.callback(env_value);
  }
  prior_settings[key] = env_value;
}

export const SETTINGS = prior_settings;

if (SETTINGS.DEBUG === true) {
  let dup = { ...SETTINGS };
  for (const [key, value] of Object.entries(dup)) {
    if ('debug_display_callback' in ENV_CONF[key]) {
      dup[key] = ENV_CONF[key].debug_display_callback(
        ENV_CONF[key],
        key,
        value,
      );
    }
  }
  console.debug(dup);
}
