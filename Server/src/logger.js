import winston from 'winston';

export const setupLogger = ({ transports }) =>
  winston.createLogger({
    transports: transports.map(({ config, type }) => {
      if (type === 'Console') return new winston.transports.Console(config);
      if (type === 'File') return new winston.transports.File(config);
      throw new Error('Not implemented type');
    }),
  });

// Global object
const defaultConfig = {
  transports: [
    {
      type: 'Console',
      config: {
        level: 'debug',
        format: winston.format.simple(),
      },
    },
  ],
};

export const logger = setupLogger(defaultConfig);
