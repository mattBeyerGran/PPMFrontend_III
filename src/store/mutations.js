import { gql } from 'apollo-boost';

/* User Mutations  */

  export const LOGIN_USER = gql`
    mutation ($data: LoginUserInput!){
    login(data: $data){
      token
    }}
  `;

  export const CREATE_USER = gql`
    mutation($data: CreateUserInput!){
      createUser(data: $data) { 
        id
        name
        rolle
        email
        createdAt
        updatedAt       
        }    
    }
  `;

  export const UPDATE_USER = gql`
    mutation($id: ID!, $data: UpdateUserInput!){
      updateUser(id: $id, data: $data) { 
        id
        name
        rolle
        email
        createdAt
        updatedAt       
        }    
    }
  `;

  export const DELETE_USER = gql`
    mutation($id: ID!){
      deleteUser(id: $id) { 
        id
        name
        rolle
        email
        createdAt
        updatedAt       
        }    
    }
  `;

export const CREATE_QUESTION = gql`
mutation($data: CreateQuestionInput!){
  createQuestion(data: $data) { 
    # id
    Reihenfolge
    Kategorie
    Frage
    gueltigAb
    gueltigBis
    # createdAt
    # updatedAt       
    }    
}
`;

export const UPDATE_QUESTION = gql`
mutation($id: ID!, $data: UpdateQuestionInput!){
  updateQuestion(id: $id, data: $data) { 
    # id
    Reihenfolge
    Kategorie
    Frage 
    gueltigAb
    gueltigBis
    # createdAt
    # updatedAt           
    }    
}
`;

export const DELETE_QUESTION = gql`
mutation($id: ID!){
  deleteQuestion(id: $id) { 
    id
    Reihenfolge
    Kategorie
    Frage
    gueltigAb
    gueltigBis
    createdAt
    updatedAt           
    }    
}
`;