import gql from 'graphql-tag'

export const ADMIN =gql `
mutation adminspagination($page:Int,$limit:Int)
    {
        adminspagination(page:$page,limit:$limit)
        {
            admins{
                Id
                Name
                Email
                Status
                RoleId
                
              }  
              totalPages
              totaladmins
              error
              currentPage
        }
    }
`;