import { gql } from 'apollo-boost';
/* import { gql } from 'graphql-tag';
 */

/* User Queries */

export const GET_USERS = gql`
  query {
    users{
      id
      name
      email
      rolle
      createdAt
      updatedAt
    }
  }
`;

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




/* Disease Queries */

export const GET_DISEASES = gql`
  query{
    posts{
      id
      title
      body
      published
      author {
      id
      name
    }
    }
  }
`;

/* Patienten */

export const GET_PATIENTS = gql`
  query{
    patients{
      id
      PatNR
      Anrede
      Titel 
      Vorname
      Nachname
      GebDat
      PLZ
      Ort
      Adresse
      Telefon
      Email
      KVNR
      Krankenkasse
      AufnahmeDatum
      UebenommenAus
      EntlassungsDatum
      EntlassungsGrund
      createdAt
      updatedAt
    }
  }
`;


/* Employees  */

export const GET_EMPLOYEES = gql`
  query{
    employees{
      id
      PNR
      Anrede
      Titel 
      Vorname
      Nachname
      GebDat
      Ausbildung
      Position
      Anerkennung
      Telefon
      Email 
      Eintritt
      Austritt
      PLZ
      Ort
      Adresse
      BeschaeftigungsArt
      SollStd
      createdAt
      updatedAt
    }
  }

`;

/* Fragen Queries */

export const GET_QUESTIONS = gql`
  query {
    questions{
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


/* Visiten */

export const GET_VISITS = gql`
  query {
    visits {
    id
    Datum 
    Versorgungsform 
    
    }
  }
`;
