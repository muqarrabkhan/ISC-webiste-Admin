import gql from 'graphql-tag'

export const COUPANS =gql `
{
    getCoupons{
      Coupon_code
      Discount_percentage
      Status_coupon
      userName {
        Name
       
      }
          
    }
}
`; 
