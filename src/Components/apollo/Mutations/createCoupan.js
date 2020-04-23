import gql from 'graphql-tag'

export const CREATE_COUPON =gql`
mutation createCoupons(
    $Coupon_code: String,
    $Status_coupon: String,
    $Discount_percentage: Int
    )
    {
        createCoupons(
            Coupon_code:$Coupon_code,
            Status_coupon:$Status_coupon,
            Discount_percentage:$Discount_percentage
            )
            {
                Id
                error
            }
    }
`;