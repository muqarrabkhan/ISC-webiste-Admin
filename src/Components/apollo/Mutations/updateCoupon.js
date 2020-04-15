import gql from 'graphql-tag'

export const EDIT_COUPON = gql`
mutation updateCoupons(
    $Id: Int,
    $Coupon_code: String,
    $Status_coupon: String,
    $Discount_percentage: Int
    )
    {
        updateCoupons(
            Id:$Id,
            Coupon_code:$Coupon_code,
            Status_coupon:$Status_coupon,
            Discount_percentage:$Discount_percentage
        )
        {
        error
        }
}
`;




