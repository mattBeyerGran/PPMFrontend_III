import { gql } from 'apollo-boost';

export const GET_ME = gql`
  query{
    me {
      id
      email
      rolle
      password
      name
      createdAt
      updatedAt
    }
  }
`;


