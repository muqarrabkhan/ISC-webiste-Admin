import gql from 'graphql-tag'

export const COUPENS =gql`
{
    getCoupons{
     Coupon_code
     Discount_percentage
     Status_coupon
      User_id
    }
    }
`;