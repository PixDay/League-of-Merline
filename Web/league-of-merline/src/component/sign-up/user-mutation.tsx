import * as client from '../client';
import gql from "graphql-tag";
import ReactDOM from 'react-dom';
import React from 'react';
import SignIn from '../sign-in/sign-in'

export function register(accountName: string, password: string) {
    const mutation = gql`
        mutation ($accountName: String! $password: String!) 
        {
            register (accountName: $accountName, password: $password) 
                {token} 
        }
    `;
    
    client.connection.mutate({mutation, variables: {accountName, password}}).then(result => {
        if (result["data"]["register"]["token"] != null)
            ReactDOM.render(<SignIn />, document.getElementById("root"));
    });
}