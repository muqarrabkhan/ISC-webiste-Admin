import gql from 'graphql-tag'

export const DELETE_WEB_PAGE =gql`
mutation deletewebpages ($id:Int){
    deletewebpages(id:$id){
        id
    }
}
`;