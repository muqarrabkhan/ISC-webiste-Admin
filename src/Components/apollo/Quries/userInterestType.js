import gql from 'graphql-tag'

export const USER_INTEREST = gql`
    {
        getAllIntersts {
            id
            name
            Slug
            totalInterests
          }
    }
`;

