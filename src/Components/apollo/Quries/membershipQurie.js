import gql from 'graphql-tag'

export const MEMBERSHIP = gql`
{
    membershipdetails{
      id
      Name
      StorefrontLimit
      CampaignLimit
      ChargePercentage
      SubscriptionCharges
      
    }
}`;