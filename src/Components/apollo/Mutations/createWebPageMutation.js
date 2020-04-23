import gql from 'graphql-tag'


export const CREATE_WEB_PAGE =gql`
mutation createwebpages(
    $MetaKeywords:String,
    $pageTitle:String,
    $pageHeading:String,
    $MetaDescription:String,
    $pageContent:String,
    $createdIp:Long
    
){
    createwebpages(
        MetaKeywords:$MetaKeywords,
        pageTitle: $pageTitle,
        pageHeading:$pageHeading,
        MetaDescription: $MetaDescription,
        createdIp: $createdIp,
        pageContent:$pageContent
    )
    {
        id
        error
    }

}
`;