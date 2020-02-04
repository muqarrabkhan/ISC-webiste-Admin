import gql from 'graphql-tag';

export const LOGIN_USER = gql`
  mutation adminLogin($Email:String!,$Password:String!){
    adminLogin(email:$Email , password:$Password){
      response
    }
  }

`

