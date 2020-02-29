import gql from 'graphql-tag'

export const NEWSLETTERS =gql `
mutation newsletters($page:Int,$limit:Int)
    {
        newsletters(page:$page,limit:$limit)
        {
            newsletters {
                name
                datetime 
              }
              totalPages
              currentPage
              totalnewsletters
            }
    }
`;
