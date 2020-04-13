import gql from 'graphql-tag'

export const UPDATE_STOREFRONT = gql`
mutation updateStorefront(
    $Id: Int,
    $Name: String!,
    $OriginCountry: String,
    $OriginState: String,
    $OriginPostalCode: Int,
    $token:String
    )
     {
     updateStorefront (
         Id:$Id,
         Name:$Name,
         OriginCountry:$OriginCountry,
         OriginState:$OriginState,
         OriginPostalCode:$OriginPostalCode,
         token:$token
         )
        
        }
`;




