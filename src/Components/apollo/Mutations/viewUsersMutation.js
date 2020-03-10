import gql from 'graphql-tag';

export const VIEWUSERS_MUTATION = gql`
mutation users(
    $page:Int!,
    $limit:Int!
  )
  {
    users(
    page: $page,
    limit:$limit
  )
    {
    users
    {
      Email
      Name
      Status
      is_affiliated
    }
    totalPages
    
    }
  }
    
  
`;