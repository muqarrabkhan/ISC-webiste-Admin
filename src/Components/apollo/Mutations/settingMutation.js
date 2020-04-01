import gql from 'graphql-tag'

export const SETTING =gql `
mutation setting($page:Int,$limit:Int,$setting_type: String)
    {
        setting(page:$page,limit:$limit,setting_type:$setting_type)
        {
            settings{
                fieldName
                Keytext
                setting_type
                ID
              }
              totalsettings
              totalPages
              currentPage
              error
        }
    }
`;