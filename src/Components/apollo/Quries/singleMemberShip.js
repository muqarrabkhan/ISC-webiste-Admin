import gql from 'graphql-tag'

export const SINGLE_MEMBERSHIP = (id) => gql`
{
    getsinglemembership(id:${id}){
        id
        Name
        StorefrontLimit
        CampaignLimit
        ChargePercentage
        SubscriptionCharges
    }
  }
`;