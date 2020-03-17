import gql from 'graphql-tag'

export const UPDATE_MEMBERSHIP = gql`

mutation updatemembership(
    $id: Int,
    $Name: String,
    $StorefrontLimit: Int,
    $CampaignLimit: Int,
    $ChargePercentage: Float,
    $SubscriptionCharges: Float
    )
    {
        updatemembership(
            id:$id,
            Name:$Name,
            StorefrontLimit:$StorefrontLimit,
            CampaignLimit:$CampaignLimit,
            ChargePercentage:$ChargePercentage,
            SubscriptionCharges:$SubscriptionCharges
            )
            {
                error
            }
    }
`;
