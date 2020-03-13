import gql from 'graphql-tag'

export const DELETE_USER = gql`
mutation deleteuser($Id:Int){
    deleteuser(Id:$Id){
        Id
    }
}
`;