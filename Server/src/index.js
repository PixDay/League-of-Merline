import { GraphQLServer } from 'graphql-yoga';
import express from 'express';
import { Prisma } from 'prisma-binding';
import { logger } from './logger';
import resolvers from './resolvers';
import { getUserIdRequest, getUserIdConnection } from './auth';

const DIR_NAME = process.env.DIR_NAME || 'src';

// Building Prisma object
const db = new Prisma({
  typeDefs: `${DIR_NAME}/generated/prisma.graphql`,
  endpoint: process.env.PRISMA_ENDPOINT,
  secret: process.env.PRISMA_SECRET,
});

console.log(resolvers);

// Setting up server
const server = new GraphQLServer({
  typeDefs: `${DIR_NAME}/schema.graphql`,
  resolvers,
  resolverValidationOptions: {
    requireResolversForResolveType: false,
  },
  context: req => ({
    ...req,
    db,
  }),
});

const options = {
  port: process.env.APP_PORT || 3000,
  endpoint: process.env.APP_ENDPOINT || '/graphql',
  subscriptions: process.env.APP_ENDPOINT_SUBSCRIPTIONS || '/subscriptions',
  playground: process.env.NODE_ENV === 'development' ? '/' : false,
  bodyParserOptions: {
    limit: '100Mb',
  },
};

// Starting server
server.start(options, ({ endpoint, port }) =>
  logger.info(`Server is running on http://localhost:${port}${endpoint}`)
);
