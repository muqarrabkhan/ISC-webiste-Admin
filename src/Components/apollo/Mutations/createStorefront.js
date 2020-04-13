import gql from 'graphql-tag'

export const CREATE_STOREFRONT = gql`
mutation createStorefront(
    $Name: String!
    $Status: String,
    $Createduser: String,
    $CreatedIp: Long,
    $OriginCountry: String,
    $OriginState: String,
    $OriginPostalCode: Int,
    $token: String
    ){
        
        createStorefront(
            Name:$Name,
            Status:$Status,
            Createduser:$Createduser,
            CreatedIp:$CreatedIp,
            OriginCountry:$OriginCountry,
            OriginState:$OriginState,
            OriginPostalCode:$OriginPostalCode,
            token:$token
            )
    {
        Id
        error
    }

}
`