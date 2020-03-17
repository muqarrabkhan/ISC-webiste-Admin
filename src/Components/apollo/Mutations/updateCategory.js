import gql from 'graphql-tag'

export const EDIT_CATEGORY = gql`
mutation updatecategory(
    $Id:Int,
    $Name: String!,
    $description: String
    )
    {
        updatecategory(
            Id:$Id,
            Name: $Name,
            description:$description
            )
        {
        error
        }
}
`;




