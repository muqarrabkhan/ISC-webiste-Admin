import gql from 'graphql-tag'

export const SINGLE_REPORT=(campaignId)=>gql`
{
    getReportsByCampaignId(campaignId:${campaignId}){
      id
      content
      catagory
    }
  }

`;