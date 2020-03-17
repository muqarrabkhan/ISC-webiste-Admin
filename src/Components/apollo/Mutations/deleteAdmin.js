import gql from 'graphql-tag'

export const DELETE_ADMIN =gql`
mutation deleteadmin($Id: Int){
    deleteadmin(Id:$Id){
        Id
    }
}
`;