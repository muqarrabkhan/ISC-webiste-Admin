import gql from 'graphql-tag'

export const SINGLE_SETTING=(ID)=>gql`
{
    singlesettings(ID:${ID}){
        ID
        fieldName
        Keytext
        value
        setting_type
        status
        createdIp
        error
    }
  }
`;