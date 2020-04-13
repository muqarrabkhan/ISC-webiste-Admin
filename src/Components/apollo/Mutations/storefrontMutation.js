import gql from 'graphql-tag'

export const GET_ALL_STOREFRONT =gql `
mutation allStorefrontsPagination($page: Int,$limit: Int)
    {
        allStorefrontsPagination(page:$page,limit:$limit)
        {
            storefronts{
                Id
                Name
                CreatedDate
                totalQuantity
                products{
                    product {
                    Id
                    Name
                    Status
                    base_price
                    sale_price
                    image
                    actual_weight
                    height
                    width
                    length
                    category
                    declared_currency
                    totalQuantity
                    totalPrice
                    error
                    }
                }
        }
        totalPages
        totalstorefronts
        currentPage
        }
    }
`;