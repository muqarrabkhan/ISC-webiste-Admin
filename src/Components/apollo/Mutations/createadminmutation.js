import gql from 'graphql-tag';

export const CREATE_ADMIN = gql`

  mutation createAdmin(
    $Name:String!,
    $Email:String!,
    $Password:String!,
    $RoleId:Int!, 
    $Status:String!,
    $CreatedDate:DateTime!,
    $CreatedIp:Int!,
    $CreatedBy:Int!
   
    )
    {
    createAdmin(
         Name:$Name,
         Email:$Email,
         Password:$Password,
         RoleId:$RoleId,
         Status:$Status,
         CreatedDate:$CreatedDate,
         CreatedIp:$CreatedIp,
         CreatedBy:$CreatedBy
        
         )
         {
      error
    }
  }

`;