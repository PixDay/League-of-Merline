import ApolloClient from 'apollo-boost';

export const connection = new ApolloClient({
  uri: 'http://localhost:4006/graphql'
});