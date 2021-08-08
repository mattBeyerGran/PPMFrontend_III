import { gql } from 'apollo-boost';

/* User Mutations  */

  export const LOGIN_USER = gql`
    mutation ($data: LoginUserInput!){
    login(data: $data){
      token
    }}
  `;
