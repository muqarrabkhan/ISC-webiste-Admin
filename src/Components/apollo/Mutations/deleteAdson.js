import gql from 'graphql-tag'

export const DELETE_ADSON =gql`
mutation deleteadsons ($id:Int){
    deleteadsons(id:$id){
        id
    }
}
`;