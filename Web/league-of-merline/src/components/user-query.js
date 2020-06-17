import * as client from './client';
import gql from "graphql-tag";

export function login(accountName, password, rememberMe) {
  client.client.query({query: gql`{
    login(accountName: "${accountName}" password: "${password}" rememberMe: ${rememberMe})
    {token user{accountName id}}
  }
  `}).then(result => {
    if (result.data["login"] != null) {
      console.log("CHANGE L'URL BATARD");
      console.log(result);
    }
  });
}

export function getUsers() {
    client.client.query({query: gql`
    {
      users(orderBy: accountName_ASC)
      {id accountName}
    } 
    `}).then(result => console.log(result));
}

export function getUser() {
    client.client.query({query: gql`{
        user(where: {accountName: "adriencolombier"})
        {
          id
          accountName
        }
      }}))`}).then(result => console.log(result));
}

export function getUsersConnection() {
    client.client.query({query: gql`
    `}).then(result => console.log(result));
}

export function register() {
    console.log(client.client.mutate({mutation: gql`
    `}).then(result => console.log(result)));
}