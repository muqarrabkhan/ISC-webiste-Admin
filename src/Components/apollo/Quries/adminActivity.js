import gql from 'graphql-tag'

export const SINGLE_ADMINACTIVITY = (Id) => gql`
{
    adminactivitybyid(Id:${Id}){
        Id
        TableId
        Type
        TableName
        ModifiedBy
        ModifiedDate
        ModifiedIp
        adminName
        error
    }
  }
`;