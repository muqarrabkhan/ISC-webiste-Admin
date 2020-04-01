import gql from 'graphql-tag'

export const VIEW_CAMPAIGN= gql`
mutation allCampaignFilters(
    $CampaignType:String,
      $page:Int,
      $limit:Int,
      $sort: String,
      $Createduser: String
    ){ allCampaignFilters(
        CampaignType:$CampaignType,
        page:$page,
        limit:$limit,
        sort:$sort,
        Createduser:$Createduser  
        ){
      campaigns{
        Id
       Name
       CampaignType
        CreatedBy
        Verified
        CategoryId
        CreatedDate
        supportCount
        is_campaign_aws
        Status
        ShowOnList
        is_donation
      }
      totalPages
      totalCampaigns
    }
  }

  
`;