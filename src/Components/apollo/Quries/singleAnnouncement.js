import gql from 'graphql-tag'

export const SINGLE_ANNOUNCEMENT=(id)=>gql`
{
    singleannouncements(id:${id})
    {
        id
        title
        detail
        link
      }
  }
`;