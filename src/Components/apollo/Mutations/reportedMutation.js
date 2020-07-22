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
          recent_reported_date
          Slug
        }
        totalPages
        totalCampaigns
        currentPage
    }
}
`;
