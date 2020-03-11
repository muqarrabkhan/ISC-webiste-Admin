import gql from 'graphql-tag'

export const VIEW_MUTATION = gql`
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
        CampaignId
        CreatedDate
        CampaignName {
          Id
          Name
          error
        }
        userName {
          Id
          Name
          Status
          is_affiliated
          CreatedDate
          }
        
    
    }
    totaluserActivity
    totalPages
    currentPage
    error
    
    }
  }
`;


