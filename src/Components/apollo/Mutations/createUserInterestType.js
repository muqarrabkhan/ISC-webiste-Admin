import gql from 'graphql-tag'


export const CREATE_USER_INTEREST =gql`
mutation createInterests($name: String){
    createInterests(name:$name)
    {
        error
    }

}
`;