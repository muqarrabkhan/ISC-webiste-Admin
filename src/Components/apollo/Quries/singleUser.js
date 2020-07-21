import gql from 'graphql-tag'

export const SINGLE_USER = (token,userId) => gql`
{
    getuserbyId( token:"${token}",userId:${userId}){
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
           CreatedIp
        CampaignName {
         Name
        }
      is_activity_aws
        CreatedDate
 }
  }
  }
`;