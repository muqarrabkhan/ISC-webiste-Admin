import gql from 'graphql-tag'

export const CREATE_NEWSLETTER = gql`
mutation createnewsletter(
    $name: String,
    $support_mailsettings_id:Int,
    $datetime: String,
    $status: String,
    $group: String,
    $cron_status: String,
    $date_created: DateTime,
    $InterestedIds: [ID]
    )
    {
        createnewsletter(
            name:$name,
            support_mailsettings_id:$support_mailsettings_id,
            datetime:$datetime,
            status:$status,
            group:$group,
            cron_status:$cron_status,
            date_created:$date_created,
            InterestedIds:$InterestedIds
            )
            {
                error
            }
    }
`;

