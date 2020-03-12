import gql from 'graphql-tag'

export const CREATE_ANNOUNCEMENT = gql`
mutation createannouncements(
    $title: String,
    $detail: String,
    $link: String,
    $date_created: DateTime
    ){
        
        createannouncements(
            title:$title,
            detail:$detail,
            link:$link,
            date_created:$date_created
            )
    {
        error
    }

}
`;