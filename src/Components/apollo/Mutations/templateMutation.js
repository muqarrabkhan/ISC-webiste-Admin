import gql from 'graphql-tag'

export const TEMPLATE =gql `
mutation Templates($page:Int,$limit:Int)
    {
        Templates(page:$page,limit:$limit)
        {
            Template{
                Id
                Title
                Status
                Subject
                Email
                FromText
                Status
                Type
                CreatedDate
              }    
              totalPages
              totalTemplate
              currentPage
              error
        }
    }
`;