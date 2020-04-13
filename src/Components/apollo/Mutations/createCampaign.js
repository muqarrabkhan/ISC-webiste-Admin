import gql from 'graphql-tag';

export const CREATE_CAMPAIGN = gql`
  mutation createCampaign(
    $Name: String,
    $CampaignType: String,
    $ShortDescription: String,
    $CategoryId: Int,
    $Description: String,
    $StartDate: DateTime,
    $EndDate: DateTime,
    $goal_support: Int,
    $facebook_url: String,
    $twitter_url: String,
    $website_url: String,
    $Primary_color: String,
    $Secondary_color: String,
    $Tertiary_color: String,
    $Createduser: String,
    $Banner: String,
    $Overlay:String,
    $CreatedIp:Long,
    $token: String
    )
                       {
                        createCampaign(
                            Name:$Name,
                            CampaignType:$CampaignType,
                            ShortDescription:$ShortDescription,
                            CategoryId:$CategoryId,
                            Description:$Description,
                            StartDate:$StartDate,
                            EndDate:$EndDate,
                            goal_support:$goal_support,
                            facebook_url:$facebook_url,
                            twitter_url:$twitter_url,
                            website_url:$website_url,
                            Primary_color:$Primary_color,
                            Secondary_color:$Secondary_color,
                            Tertiary_color:$Tertiary_color,
                            Overlay:$Overlay,
                            Banner:$Banner,
                            Createduser:$Createduser,
                            CreatedIp:$CreatedIp,
                            token:$token
                            )
                {
                        Id
                        error
                }
        }
`;


