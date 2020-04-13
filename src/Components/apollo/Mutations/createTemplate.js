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
    $CreatedIp: Long,
    $CreatedBy: Int,
    $CreatedDate: DateTime,
    $Type: String,
    $Category:String
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
        Category:$Category,
        Type:$Type
    )
    {
        Id
        error
    }

}
`;