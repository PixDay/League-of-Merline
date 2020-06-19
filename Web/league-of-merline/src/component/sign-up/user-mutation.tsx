import * as client from '../client';
import gql from "graphql-tag";

export function register(accountName: string, password: string) {
    const mutation = gql`
        mutation ($accountName: String! $password: String!) 
        {
            register (accountName: $accountName, password: $password) 
                {token} 
        }
    `;
    
    client.connection.mutate({mutation, variables: {accountName, password}});
}