import gql from 'graphql-tag'



export const DELETE_PRODUCT=gql`
mutation DeleteProduct($Id:Int){
    DeleteProduct(Id:$Id){
        Id
    }
}






`