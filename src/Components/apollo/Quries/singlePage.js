import gql from 'graphql-tag'

export const SINGLE_PAGE = (Slug) => gql`
{
    singlewebpages(Slug:"${Slug}"){
        id
        MetaKeywords
        MetaDescription
        pageTitle
        pageHeading
        pageContent
        status
        slug
        createdIp
    }
  }
`;