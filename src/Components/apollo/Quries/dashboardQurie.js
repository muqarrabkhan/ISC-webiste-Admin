import gql from 'graphql-tag';

export const ADMIN_DASHBOARD=gql`
{
  
    TotalSupportToday
    TotalSupportLastWeek
    TotalNewCampaignToday
    TotalNewCampaignLastWeek
    TotalNewUsersToday
    TotalNewUsersLastWeek
    TotalNewSupportCampaignToday
    TotalNewSupportCampaignLastWeek
    TotalNewpetitionsCampaignToday
    TotalNewpetitionsCampaignLastWeek
    TotalNewpledgesCampaignToday
    TotalNewpledgesCampaignLastWeek    
    TotalNewFundriseCampaignToday
    TotalNewFundriseCampaignLastWeek
}
`;

export const DASHBOARD_CATEGORIES=gql`
{
    campaignCategories{
    Name
    description
    Status
    }
}    
`;