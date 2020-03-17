import gql from 'graphql-tag'

export const UPDATE_USER = gql`
mutation updateusers(
    $Id: Int,
    $Name: String!,
    $Password: String!,
    $Status: String
    )
    {
        updateusers(
            Id:$Id,
            Name:$Name,
            Password:$Password,
            Status:$Status
            )
        {
        error
        }
}
`;




