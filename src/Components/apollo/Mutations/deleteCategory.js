import gql from 'graphql-tag'



export const DELETE_CATEGORY=gql`
mutation deletecategory($id:Int){
    deletecategory(id:$id){
        Id
    }
}






`