import gql from 'graphql-tag'

export const SINGLE_TEMPLATE = (Id) => gql`
{
    singletemplate(Id:${Id}){
        Id
        Title
        Subject
        Email
        Password
        FromText
        Content
        Status
        Type
        Category
    }
  }
`;