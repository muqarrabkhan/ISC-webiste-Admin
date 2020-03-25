
import gql from 'graphql-tag'

export const UPDATE_USER_INTEREST = gql`
mutation updateInterests(
    $id: Int,
    $name: String
    )
    {
        updateInterests(
            id:$id,
            name:$name
            )
        {
        error
        }
}
`;




