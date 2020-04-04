import gql from 'graphql-tag'

export const DELETE_CAMPAIGN = gql`
mutation DeleteCampaign($Id: Int,$token: String){
        DeleteCampaign(Id:$Id,token:$token)
        {
            token
        
        }
    }
`;