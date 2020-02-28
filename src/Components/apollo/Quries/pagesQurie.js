import gql from 'graphql-tag'

export const PAGES =gql `
{
    getwebpages{
          pageTitle
      slug
    }
}
`;