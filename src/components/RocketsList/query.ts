import gql from 'graphql-tag';

export const QUERY_ROCKETS_LIST = gql`
  query RocketsList {
    rockets {
      id
      active
      cost_per_launch
      first_flight
      country
      company
      height {
        meters
      }
      diameter {
        meters
      }
      mass {
        kg
      }
      wikipedia
      description
      rocket_id
      rocket_name
      rocket_type
      flickr_images
    }
  }
`;
