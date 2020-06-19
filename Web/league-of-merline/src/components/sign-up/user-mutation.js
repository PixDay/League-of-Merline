import * as client from '../client.ts';
import gql from "graphql-tag";

export function register(accountName, password) {
    const mutation = gql`
        mutation ($accountName: String! $password: String!) 
        {
            register (accountName: $accountName, password: $password) 
                {token} 
        }
    `;
    
    client.connection.mutate({mutation, variables: {accountName, password}});
}