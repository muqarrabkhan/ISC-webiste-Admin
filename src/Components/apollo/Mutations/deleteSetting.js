import gql from 'graphql-tag'


export const DELETE_SETTING = gql`
mutation deletesettings($id:Int){
    deletesettings(id:$id){
          id
    }
}

`;