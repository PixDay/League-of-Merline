const { GraphQLServer } = require('graphql-yoga')

/* TYPEDEFS */

const typeDefs = 
`type Query {
    user: User!
}

type User {
    id: ID!
    firsname: String!
    name: String!
    birthDate: String!
    accountLog: String!
    password: String!
    city: String
}
`


/* RESOLVERS */
let adrien = [{firsname: "Adrien", name: "Colombier", birthDate: "21 Avril 1997", accountLog: "adriencolombier", password: "colombier", city: "Fontainebleau"}]

const resolvers = {
  User: {
    id : () => 1,
    firsname : () => `Adrien`,
    name : () => `Colombier`,
    birthDate : () => `21 Avril 1997`,
    accountLog : () => `adriencolombier`,
    password : () => `colombier`,
    city : () => `Fontainebleau`,
  },

  Query: {
      user : () => adrien
  }
}

/* SERVER */
const server = new GraphQLServer({
  typeDefs,
  resolvers,
})
server.start(() => console.log(`Server is running on http://localhost:4000`))