import gql from 'graphql-tag'

export const CREATE_NEWSLETTER = gql`
mutation createnewsletter(
    $name: String,
    $datetime: String
    $status: String
    $group: String
    $date_created: DateTime
    )
    {
        createnewsletter(
            name:$name,
            datetime:$datetime,
            status:$status,
            group:$group,
            date_created:$date_created
            )
            {
                error
            }
    }
`;