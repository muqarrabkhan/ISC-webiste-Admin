import gql from 'graphql-tag'

export const UPDATE_PAGE = gql`
mutation updatewebpage(
    $id: Int,
    $MetaKeywords: String,
    $MetaDescription: String,
    $pageTitle: String,
    $pageHeading: String,
    $pageContent: String
    )
    {
        updatewebpage(
            id:$id,
            MetaKeywords:$MetaKeywords,
            MetaDescription:$MetaDescription,
            pageTitle:$pageTitle,
            pageHeading:$pageHeading,
            pageContent: $pageContent
            )
        {
        error
        }
}
`;




