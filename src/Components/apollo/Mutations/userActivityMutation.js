import gql from 'graphql-tag';

export const USERACTIVITY_MUTATION = gql`
mutation userActivity(
    $page:Int!,
    $limit:Int!
  )
  {
    userActivity(
    page: $page,
    limit:$limit
  )
    {
    userActivity
    {
        Image
        UserId
        CampaignId
        CreatedDate
    }
totalPages 
    }
  }
`