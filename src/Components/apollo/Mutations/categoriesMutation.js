import gql from 'graphql-tag'

export const CATEGORIES =gql `
mutation getCategories($page:Int,$limit:Int)
    {
        getCategories(page:$page,limit:$limit)
        {
            Categories{
                Name
                Status
                Id
            }
            totalPages
            currentPage
          totalCategories
        }
    }
`;
