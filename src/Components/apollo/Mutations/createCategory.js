import gql from 'graphql-tag'

export const CREATE_CATEGORY =gql`
mutation createcategory(
    $Name: String!,
    $description: String,
    $CreatedIp: Long,
    $CreatedBy: Int,
    $Status:String
    )
    {
        createcategory(
            Name:$Name,
            description:$description,
            CreatedIp:$CreatedIp,
            CreatedBy:$CreatedBy,
            Status:$Status
            )
            {
                error
            }
    }
`;