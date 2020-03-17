import gql from 'graphql-tag'

export const UPDATE_ANNOUNCEMENT = gql`
mutation updateannouncements(
    $id: Int,
    $title: String,
    $detail: String,
    $link: String,
    $date_updated: DateTime
    )
    {
        updateannouncements(
            id:$id,
            title:$title,
            detail:$detail,
            link:$link,
            date_updated:$date_updated
            )
        {
        error
        }
}
`;




