import gql from 'graphql-tag'

export const PAGES =gql `
mutation getwebpages($page:Int,$limit:Int)
    {
        getwebpages(page:$page,limit:$limit)
        {
            webpages{
                pageTitle
                slug
                id
              }
              totalPages
              totalwebpages
              totalPages
              currentPage
              error
        }
    }
`;