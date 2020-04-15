import gql from 'graphql-tag'

export const SINGLE_COUPON = (id) => gql`
{
    singleCouponById(Id:${id})
    {
      Id
      Coupon_code
      Status_coupon
      Discount_percentage
    }
  }
`;