import gql from 'graphql-tag'

export const SELECT_STOREFRONT=(UserId) => gql `
{
    userStorefronts(UserId:${UserId}){
      Name
      Id
      Slug
    }
  }
`;