import gql from 'graphql-tag'

export const DELETE_COUPON = gql`
mutation deleteCoupons($Id:Int){
    deleteCoupons(Id:$Id){
        Id
        Page_link
    }
}
`;