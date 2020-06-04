import { GraphQLServer } from 'graphql-yoga';
import { Prisma } from 'prisma-binding';
import resolvers from './resolvers';

const DIR_NAME = 'src';

// Building Prisma object
const db = new Prisma({
  typeDefs: `${DIR_NAME}/generated/prisma.graphql`,
  endpoint: 'http://192.168.99.100:4467',
});

// Setting up server
const typeDefs = `${DIR_NAME}/schema.graphql`;

const server = new GraphQLServer({
  typeDefs,
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
  port: 3006,
  endpoint: '/graphql',
  subscriptions: '/subscriptions',
  playground: process.env.NODE_ENV === 'development' ? '/' : false,
};

// Serve a static directory which is the image storage

// Starting server
server.start(options, ({ endpoint, port }) =>
  console.log(`Server is running on http://localhost:${port}${endpoint}`)
);
