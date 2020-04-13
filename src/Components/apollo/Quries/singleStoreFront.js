import gql from 'graphql-tag'

export const SINGLE_STOREFRONT=(Slug)=>gql`
{
    singleStorefrontBySlug(Slug: "${Slug}") {
      Name
      OriginPostalCode
      OriginCountry
      OriginState
    }
  }
`;
