import gql from 'graphql-tag';

export const ADMIN_DASHBOARD=gql`
{
  TotalNewUsersToday {
    
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
  }
  TotalSupportToday
  TotalSupportLastWeek
  TotalNewCampaignToday{
    TotalNewCampaignToday
  }
}
`;