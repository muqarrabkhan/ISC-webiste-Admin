import gql from 'graphql-tag'

export const CREATE_CATEGORY =gql`
mutation createcategory(
    $Name: String!,
    $description: String,
    $Status:String
    )
    {
        createcategory(
            Name:$Name,
            description:$description,
            Status:$Status
            )
            {
                Id
                error
            }
    }
`;