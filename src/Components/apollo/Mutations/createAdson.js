import gql from 'graphql-tag'

export const CREATE_ADSON =gql`
mutation createadson(
    $user_id: Int,
    $campaign_id: Int,
    $status: String,
    $type: String,
    $place_on: Int,
    $ad_text: String,
    $ad_button: String,
    $ad_image: String,
    $bgcolor: String,
    $startdate: Date,
    $enddate: Date,
    $date_created: DateTime
    )
    {
        createadson(
            user_id:$user_id,
            campaign_id:$campaign_id,
            status:$status,
            type:$type,
            place_on:$place_on,
            ad_text:$ad_text,
            ad_button:$ad_button,
            ad_image:$ad_image,
            bgcolor:$bgcolor,
            startdate:$startdate,
            enddate:$enddate,
            date_created:$date_created
            )
            {
                error
            }
    }
`;

    // $ad_link: String,