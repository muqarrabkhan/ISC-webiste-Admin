import gql from 'graphql-tag'

export const SINGLE_USER=(Id)=>gql`
{
    getuserbyId(Id:${Id}){
        Id
        Name
        Email
        Password
        Status
        CreatedIp
        FacebookId
        CreatedDate
    }
  }
`;