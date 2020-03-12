import gql from 'graphql-tag'

export const SINGLE_CATEGORY = gql`
{
    getannouncements{
      title
      id
      flag
      }
}
`;