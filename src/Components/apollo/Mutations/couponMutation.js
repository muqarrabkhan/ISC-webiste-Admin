import gql from 'graphql-tag'

export const ALL_COUPONS = gql `
mutation getAllCoupons($page:Int,$limit:Int)
    {
        getAllCoupons(page:$page,limit:$limit)
        {
            coupons{
                Id
                Coupon_code
                Discount_percentage
                Status_coupon
                Page_link
              }
              totalPages
              currentPage
              totalCoupons
        }
    }
`;
