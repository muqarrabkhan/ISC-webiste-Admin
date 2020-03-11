import gql from 'graphql-tag'

export const SETTING =gql `
mutation setting($page:Int,$limit:Int)
    {
        setting(page:$page,limit:$limit)
        {
            settings{
                fieldName
                Keytext
                setting_type
              }
              totalsettings
              totalPages
              currentPage
              error
        }
    }
`;