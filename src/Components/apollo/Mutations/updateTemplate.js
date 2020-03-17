import gql from 'graphql-tag'

export const UPDATE_TEMPLATE = gql`
mutation updateatemplate(
    $Id: Int,
    $Title: String,
    $Subject: String,
    $Email: String,
    $FromText: String,
    $Content: String,
    $Status: String,
    $Type: String,
    $Category: String
    )
    {
        updateatemplate(
            Id:$Id,
            Title:$Title,
            Subject: $Subject,
            Email: $Email,
            FromText: $FromText,
            Content: $Content
            Status:$Status,
            Type:$Type,
            Category: $Category
           )
        {
        error
        }
}
`;




