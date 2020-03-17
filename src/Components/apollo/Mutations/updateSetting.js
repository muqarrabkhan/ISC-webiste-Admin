import gql from 'graphql-tag'

export const UPDATE_SETTING = gql`
mutation updatesettings(
    $ID: Int,
    $fieldName: String,
    $Keytext: String,
    $value: String,
    $setting_type: String
    )
    {
        updatesettings(
            ID:$ID,
            fieldName:$fieldName,
            Keytext:$Keytext,
            value:$value,
            setting_type:$setting_type
            )
        {
        error
        }
}
`;




