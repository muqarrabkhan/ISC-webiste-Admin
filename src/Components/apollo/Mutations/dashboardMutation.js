import gql from 'graphql-tag';

export const DASHBOARD_MUTATION = gql`

    mutation lastWeekCampaignPagination(
        $CampaignType: String!,
        $page: Int!,
        $limit:Int!
        )
    {
    lastWeekCampaignPagination(
        CampaignType:$CampaignType,
        page:$page ,
        limit:$limit
        ) 
    {
    campaigns{
        Id
        Name
        Slug
        campaign_made
        CampaignType
        campaign_needed
        Image
        Overlay
        CategoryId
      }
      totalPages
    }
  }
  `;