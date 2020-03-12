import gql from 'graphql-tag'

export const CREATE_SETTING = gql`
mutation createsettings(
    $fieldName: String,
    $Keytext: String,
    $value: String,
    $createdIp: Int,
    $createdDate: DateTime
    ){
    createsettings(
        fieldName:$fieldName,
        Keytext:$Keytext,
        value:$value,
        createdDate:$createdDate,
        createdIp:$createdIp
        )
    {
        error
    }

}
`;