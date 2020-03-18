import gql from 'graphql-tag'

export const UPDATE_ADSON = gql`
mutation updateadson(
    $id: Int,
    $status: String,
    $type: String,
    $place_on: Int
    )
    {
        updateadson(
            id:$id,
            status:$status,
            type:$type,
            place_on:$place_on
            )
        {
        error
        }
}
`;




