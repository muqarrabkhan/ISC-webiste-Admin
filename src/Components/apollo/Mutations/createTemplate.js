import gql from 'graphql-tag'

export const CREATE_TEMPLATE = gql`
mutation createTemplate(
    $Title: String,
    $Subject: String,
    $Email: String,
    $Password: String,
    $FromText: String,
    $Content: String,
    $Status: String,
    $CreatedIp: Int,
    $CreatedBy: Int,
    $CreatedDate: DateTime,
    $Type: String
    ){
        
        createTemplate(
            Title:$Title,
        Subject:$Subject,
        Email:$Email,
        Password:$Password,
        FromText:$FromText,
        Content:$Content,
        Status:$Status,
        CreatedIp:$CreatedIp,
        CreatedBy:$CreatedBy,
        CreatedDate:$CreatedDate,
        Type:$Type
    )
    {
        error
    }

}
`;