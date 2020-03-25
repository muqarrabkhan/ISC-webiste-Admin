import gql from 'graphql-tag'

export const NEWSLETTERS_TEMPLATES = gql`
mutation getNewsLetterTemplates
    {
        getNewsLetterTemplates
        {
                Id
                Title
                Type
            }
    }
`;

