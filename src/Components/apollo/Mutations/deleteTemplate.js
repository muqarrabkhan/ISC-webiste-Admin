import gql from 'graphql-tag'


export const DELETE_TEMPALTE =gql`
mutation deletetemplate ($Id:Int){
    deletetemplate(Id:$Id){
        Id
    }
}
`;




