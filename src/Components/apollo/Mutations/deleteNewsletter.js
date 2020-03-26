import gql from 'graphql-tag'

export const DELETE_NEWSLETTER =gql`
mutation deleteNewsLetter($Id:Int){
    deleteNewsLetter(Id:$Id){
        Id
    }
}
`;