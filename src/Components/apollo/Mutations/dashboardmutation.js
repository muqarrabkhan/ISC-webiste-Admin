import gql from 'graphql-tag';

 export const LAST_WEEK_CAMPAIGNS=gql`
 mutation lastWeekCampaignPagination(
     $CampaignType:String!,
     $page:Int!,
     $limit:Int!
 )
 {
    lastWeekCampaignPagination(
        CampaignType:$CampaignType,
        page:$page,
        limit:$limit
    )
  {      
    campaigns{
            Id
            Name
            Slug
            CampaignType
            campaign_needed
        }
    }
}

 `;