import gql from 'graphql-tag'

export const UPDATE_ADMIN = gql`
mutation updateadmin(
    $Id: Int,
    $Password: String,
    $RoleId: Int,
    $Name: String,
    $Status: String
    )
    {
        updateadmin(
            Id:$Id
            Password:$Password,
            RoleId:$RoleId,
            Name:$Name, 
            Status:$Status 
            )
        {
        error
        }
}
`;




