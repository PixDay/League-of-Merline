const { GraphQLServer } = require('graphql-yoga')

/* TYPEDEFS */

const typeDefs = 
`type Query {
    firsname: String!
    name: String!
    birthDate: String!
    accountLog: String!
    password: String!
    city: String
}
`


/* RESOLVERS */
const resolvers = {
  Query: {
    firsname : () => `Adrien`,
    name : () => `Colombier`,
    birthDate : () => `21 Avril 1997`,
    accountLog : () => `adriencolombier`,
    password : () => `colombier`,
    city : () => `Fontainebleau`,
  }
}

/* SERVER */
const server = new GraphQLServer({
  typeDefs,
  resolvers,
})
server.start(() => console.log(`Server is running on http://localhost:4000`))