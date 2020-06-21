import * as client from '../client';
import gql from "graphql-tag";

export function login(accountName: string, password: string, rememberMe: boolean) {
  const query = gql`
    query($accountName: String! $password: String! $rememberMe: Boolean) 
    {
      login (accountName: $accountName, password: $password, rememberMe: $rememberMe)
        {token user {accountName id}}
    }
  `;
  
  client.connection.query({query, variables: {accountName, password, rememberMe}}).then(result => {
    console.log(result);
    return result;
  });
}