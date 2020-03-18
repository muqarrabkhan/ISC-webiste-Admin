import gql from 'graphql-tag'

export const SINGLE_USER = (Id) => gql`
{
    getuserbyId(Id:${Id}){
        Id
        Name
        Email
        Password
        Status
        CreatedIp
        CreatedDate  
          useractivity {
          Image
           Type
        CampaignName {
         Name
  }
      is_activity_aws
        CreatedDate
        CreatedIp
}
  }
  }
`;