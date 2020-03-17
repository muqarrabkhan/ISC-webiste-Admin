import gql from 'graphql-tag'

export const CREATE_PRODUCT = gql`

mutation createProduct(
    $Name: String,
    $CreatedBy: Int,
    $description: String,
    $sale_price: Float
    $image: String,
    $category: String,
    $actual_weight: Float
    $height: Float,
    $width: Float,
    $length: Float,
    $variation: JSON
    )
    {
        createProduct(
            Name:$Name,
            CreatedBy:$CreatedBy,
            description:$description,
            sale_price:$sale_price,
            image:$image,
            category:$category,
            actual_weight:$actual_weight,
            height:$height,
            width:$width,
            length:$length,
            variation:$variation
            )
            {
                error
            }
    }
`;
