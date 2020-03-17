import gql from 'graphql-tag'

export const SINGLE_PAGE = (Id) => gql`
{
    singlewebpages(id:${Id}){
        id
        MetaKeywords
        MetaDescription
        pageTitle
        pageHeading
        pageContent
        status
        createdIp
    }
  }
`;