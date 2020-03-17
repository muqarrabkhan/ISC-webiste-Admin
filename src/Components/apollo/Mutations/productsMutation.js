import gql from 'graphql-tag'

export const PRODUCTS =gql `
mutation getAllProducts($page:Int,
               $limit:Int)
    {
        getAllProducts(page:$page,limit:$limit)
        {
            products {
                Id
                Name
                Status
                CreatedBy
                image
                sale_price
                base_price
              }
              totalProducts
              totalPages
              currentPage
        }
    }
  
`;