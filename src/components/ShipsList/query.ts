import gql from 'graphql-tag';

export const QUERY_SHIPS_LIST = gql`
  query ShipsList {
    ships {
      ship_id
      ship_name
      ship_model
      ship_type
      successful_landings
      attempted_landings
      url
      image
    }
  }
`;
