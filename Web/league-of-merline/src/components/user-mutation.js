import * as client from './client';
import gql from "graphql-tag";

export function register(accountName, password) {
    console.log("REGISTERING");
    console.log("accountName = " + accountName);
    console.log("password = " + password);


    const mutation = gql`
        mutation(
            $accountName: String!
            $password: String!
        ) 
        {
            register(
                accountName:$accountName, password:$password) 
                {
                    token 
                } 
        }
    `;
    
    client.client.mutate({mutation, variables: {accountName, password}});
}