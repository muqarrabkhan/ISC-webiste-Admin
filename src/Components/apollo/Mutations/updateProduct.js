import gql from 'graphql-tag'

export const UPDATE_PRODUCT = gql`
mutation updateProduct(
    $Id: Int,
    $Name: String,
    $description: String,
    $sale_price: Float,
    $image: String,
    $actual_weight: Float,
    $height: Float,
    $length: Float,
    $width: Float,
    $category: String
    $variation: JSON
    )
    {
        updateProduct(
            Id:$Id,
            Name:$Name,
            description:$description,
            sale_price:$sale_price,
            image:$image,
            actual_weight:$actual_weight,
            height:$height,
            length:$length,
            width:$width,
            category:$category
            variation:$variation
            )
        {
        error
        }
}
`;







