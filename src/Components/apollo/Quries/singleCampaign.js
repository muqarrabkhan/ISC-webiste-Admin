import gql from 'graphql-tag'

export const SINGLE_CAMPAIGN = (Id) => gql`
{
  getcampaignbyId(Id:${Id}){
    Name
    Id
    CategoryId
    supportCount
    Verified
    is_campaign_aws
    ShowOnList
    CreatedBy
    CreatedDate
    Status 
}
  }
`;