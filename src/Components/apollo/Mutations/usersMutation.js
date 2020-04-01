import gql from 'graphql-tag'

export const ALL_USERS =gql `
mutation users($page:Int,
               $limit:Int,
               $Status: String
               )
    {
    users(page:$page,
          limit:$limit,
          Status:$Status
         )
        {
            users{
                Name
                Id
                Email
                Status
                is_affiliated
            }
            totalPages
            totalusers
            currentPage
            error
        }
    }
  
`;