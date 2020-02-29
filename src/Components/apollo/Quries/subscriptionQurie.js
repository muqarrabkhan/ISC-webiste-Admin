import gql from 'graphql-tag'

export const SUBSCRIPTION =gql `
{
    Subscriptions{
      id
      name
      amount
      discount_name
      discount_precentage
    }
  }
`;