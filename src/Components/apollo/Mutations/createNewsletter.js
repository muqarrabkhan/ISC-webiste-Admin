import gql from 'graphql-tag'

export const CREATE_NEWSLETTER =gql`
mutation createnewsletter(
    $name: String,
    support_mailsettings_id: Int
    datetime: String
    $status: String
    group: String
    campaign_id: Int
    is_thankyou: String
    cron_status: String
    date_created: DateTime
    )
    {
        createcategory(
            Name:$Name,
            description:$description,
            CreatedIp:$CreatedIp,
            CreatedBy:$CreatedBy,
            Status:$Status
            )
            {
                error
            }
    }
`;