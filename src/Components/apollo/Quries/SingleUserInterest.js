import gql from 'graphql-tag'

export const SINGLE_INTEREST = (id) => gql`
{
    singleInterestById(id:${id})
     {
       name
     }
}
`;