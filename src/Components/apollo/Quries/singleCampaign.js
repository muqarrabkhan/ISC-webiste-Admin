import gql from 'graphql-tag'

export const SINGLE_CAMPAIGN = (Slug) => gql`
{
  SingleCampaign(Slug:"${Slug}"){
    Name
    Banner
    Id
    CategoryId
    supportCount
    Verified
    is_campaign_aws
    ShowOnList
    CreatedBy
    CreatedDate
    Status
    Tertiary_color
    Secondary_color
    Primary_color 
    ShortDescription
    Description
    facebook_url
    twitter_url
    website_url
    CampaignType
    goal_support
    Logo
    StartDate
    EndDate
  }

  campaignCategories
  {
      Id
      Name
  }

  }
`;