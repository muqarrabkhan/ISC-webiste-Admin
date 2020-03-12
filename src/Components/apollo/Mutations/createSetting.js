import gql from 'graphql-tag'

export const CREATE_SETTING = gql`
mutation createsettings(
    $fieldName: String,
    $Keytext: String,
    $value: String,
    $createdIp: Int,
    $setting_type:String,
    $createdDate: DateTime
    ){
    createsettings(
        fieldName:$fieldName,
        Keytext:$Keytext,
        value:$value,
        setting_type:$setting_type,
        createdDate:$createdDate,
        createdIp:$createdIp
        )
    {
        error
    }

}
`;