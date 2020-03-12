import gql from 'graphql-tag'

export const CREATE_TEMPLATE = gql`
mutation createTemplate(
    $Id: Int,
    $Title: String,
    $Subject: String,
    $Email: String,
    $FromText: String,
    $Status: String,
    $Type: String,
    $CreatedDate: DateTime
    ){
        createTemplate(
            Id:$Id,
            $Title: String,
            $Subject: String,
            $Email: String,
            $FromText: String,
            $Status: String,
            $Type: String,
            $CreatedDate: DateTime
            )
    {
        error
    }

}
`;