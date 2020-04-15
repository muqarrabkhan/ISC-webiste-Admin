import gql from 'graphql-tag'

export const ALL_REPORTED_CAMPAIGNS = gql `
mutation allReportedCampaign($page:Int,$limit:Int)
    {
        allReportedCampaign(page:$page,limit:$limit)
        {
        campaigns
        {
          Id
          Name
          Description
          reportCount
          
        }
        totalPages
        totalCampaigns
        currentPage
    }
}
`;
