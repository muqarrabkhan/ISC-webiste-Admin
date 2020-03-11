import gql from 'graphql-tag'


export const CREATE_WEB_PAGE =gql`
mutation createwebpages(
    $MetaKeywords:String,
    $pageTitle:String,
    $pageHeading:String,
    $MetaDescription:String,
    $pageContent:String,
    $createdIp:Int,
    $createdBy:Int
  
){
    createwebpages(
        MetaKeywords:$MetaKeywords,
        pageTitle: $pageTitle,
        pageHeading:$pageHeading,
        MetaDescription: $MetaDescription,
        createdBy:$createdBy,
        createdIp: $createdIp,
        pageContent:$pageContent
    )
    {
   
        error
    }

}
`;