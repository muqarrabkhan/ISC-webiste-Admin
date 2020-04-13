import gql from 'graphql-tag'

export const SEARCH_NAME = gql`
mutation searchstorefrontbyName($Name: String)
    {
        searchstorefrontbyName(Name:$Name){
            Name
        }
  }
`;