import gql from 'graphql-tag'

export const CAMPAIGN_CATEGORIES=gql`
{
    campaignCategories
    {
        Id
        Name
    }

}`;