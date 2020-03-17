import gql from 'graphql-tag'

export const SINGLE_PRODUCT=(Id)=>gql`
{
  getproductbyId(Id::${Id}){
        Id
        Name
        Status
        Slug
    }
  }
`;