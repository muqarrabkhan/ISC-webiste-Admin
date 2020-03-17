import gql from 'graphql-tag';

export const ADMIN_LOGIN= gql`
{ 
    admins{
        Id
        Name
        Email
        Status
        RoleId
    }
}
`;
