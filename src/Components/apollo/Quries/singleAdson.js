import gql from 'graphql-tag'

export const SINGLE_ADSONS =(id)=>gql`

{
    getAdsonbyId(id:${id}){
        status
        place_on
        ad_text
        ad_button
        ad_image
        startdate
        enddate
        type
        bgcolor
        campaign_id
      }
  }
`;
