import gql from 'graphql-tag'

export const SINGLE_CATEGORY=(Id)=>gql`
{
    SingleCategory(Id:${Id}){
      Name
      description
      CreatedDate
      }
  }
`;