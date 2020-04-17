import gql from 'graphql-tag'

export const SINGLE_NEWSLETTER = (Id) => gql`
{
    singlenewsletter(Id: ${Id}) {
      Id
      name
      datetime
      Template{
        Id
        Title
      }
      status
      group
      campaign_id
      interestId
      campaignName
      
    }
    getAllIntersts {
        id
        name
        Slug
      }
  }
`;