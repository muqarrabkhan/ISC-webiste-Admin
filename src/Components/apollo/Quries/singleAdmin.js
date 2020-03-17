import gql from 'graphql-tag'

export const SINGLE_ADMIN=(Id)=>gql`
{
  singleadminbyId(Id:${Id})
  {
        Name
        Email
        RoleId
        Name
        Status
        CreatedDate
        Activity
        {
          ModifiedBy
          ModifiedDate
          ModifiedIp
        
        }  
  }
}
`;