import gql from 'graphql-tag'

export const ADMIN =gql `
mutation adminspagination($page:Int,$limit:Int,$Status: String)
    {
        adminspagination(page:$page,limit:$limit,Status:$Status)
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