import gql from 'graphql-tag'

export const DELETE_ANNOUNCEMENT =gql`
mutation deleteannouncements($id:Int){
    deleteannouncements(id:$id){
        id
    }
}
`;