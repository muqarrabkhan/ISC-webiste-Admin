import gql from 'graphql-tag'

export const DELETE_USER_INTEREST = gql`
mutation deleteInterests($id: Int){
    deleteInterests(id:$id){
        id
    }
}
`;