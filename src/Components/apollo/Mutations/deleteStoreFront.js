import gql from 'graphql-tag'

export const DELETE_STOREFRONT = gql`
mutation DeleteStorefront($Id: Int,$token: String){
    DeleteStorefront(Id:$Id , token:$token)
        {
            token        
        }
    }
`;