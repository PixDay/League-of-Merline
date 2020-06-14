import * as client from './client';
import gql from "graphql-tag";

export function login(accountName, password, rememberMe) {
  console.log("ASKING FOR LOGING IN");
  console.log(client.client.query({query: gql`{
    login(accountName: "${accountName}" password: "${password}" rememberMe: ${rememberMe})
    {token user{accountName id}}
  }
  `}).then(result => console.log(result)));
}

export function getUsers() {
  console.log("ASKING FOR USERS");
    console.log(client.client.query({query: gql`
    {
      users(orderBy: accountName_ASC)
      {id accountName}
    } 
    `}).then(result => console.log(result)))
}

export function getUser() {
    console.log(client.client.query({query: gql`{
        user(where: {accountName: "adriencolombier"})
        {
          id
          accountName
        }
      }}))`}).then(result => console.log(result)))
}

export function getUsersConnection() {
    console.log(client.client.query({query: gql`
    `}).then(result => console.log(result)));
}

export function register() {
    console.log(client.client.mutate({mutation: gql`
    `}).then(result => console.log(result)));
}