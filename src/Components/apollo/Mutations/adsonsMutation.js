import gql from 'graphql-tag'

export const ADSONS =gql `
mutation getAdsons($page:Int,$limit:Int)
    {
        getAdsons(page:$page,limit:$limit)
        {
            adsons{
                place_on
                startdate
                enddate
                type
                status
              }
              totalPages
              totaladsons
              currentPage
        }
    }
`;