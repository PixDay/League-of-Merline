import { PrismaClient } from '@prisma/client'
import { GraphQLServer } from 'graphql-yoga'

const prisma = new PrismaClient()


const typeDefs = `
  type Query {
    connect(log: String, password: String): String!
    contact(id: ID): String!
    category(id: ID): String!
  }

  type Mutation {
    createAccount(firstname: String, name: String): String!
    deleteAccount(firstname: String, name: String): String!
    updateAccount(firstname: String, name: String): String!

    createCategory(firstname: String, name: String): String!
    deleteCategory(firstname: String, name: String): String!
    updateCategory(firstname: String, name: String): String!

    createContact(firstname: String, name: String): String!
    deleteContact(firstname: String, name: String): String!
    updateContact(firstname: String, name: String): String!
  }

  type User {
   user(name: String): String!
  }
`

const resolvers = {
  Query: {
    connect: (_, {log, password}) => `connecting to your account`,
    contact: (_, id) => `getting all your contact`,
    category: (_, id) => `getting all your categories`
  },
  Mutation: {
    createAccount: (_, {firstname, name}) => `create account`,
    deleteAccount: (_, {firstname, name}) => `delete account`,
    updateAccount: (_, {firstname, name}) => `update account`,

    createCategory: (_, {firstname, name}) => `create category`,
    deleteCategory: (_, {firstname, name}) => `delete category`,
    updateCategory: (_, {firstname, name}) => `update category`,

    createContact: (_, {firstname, name}) => `create contact`,
    deleteContact: (_, {firstname, name}) => `delete contact`,
    updateContact: (_, {firstname, name}) => `update contact`,
  },
  User: {
    user: (_, { name }) => `type user`,
  }
}

const server = new GraphQLServer({ typeDefs, resolvers })
server.start(() => console.log('Server is running on localhost:4000'))