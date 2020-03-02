import gql from 'graphql-tag'

export const ADSONS = gql`
{
    getAdsons{
          type
      place_on
      status
    }
}
`;