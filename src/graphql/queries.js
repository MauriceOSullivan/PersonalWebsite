/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getLondonPlace = /* GraphQL */ `
  query GetLondonPlace($id: ID!) {
    getLondonPlace(id: $id) {
      id
      name
      address
      description
      createdAt
      updatedAt
    }
  }
`;
export const listLondonPlaces = /* GraphQL */ `
  query ListLondonPlaces(
    $filter: ModellondonPlaceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLondonPlaces(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        address
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
