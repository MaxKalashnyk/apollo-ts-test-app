import * as React from 'react';
import { useShipsListQuery } from '../../generated/graphql';

export const ShipsList: React.FC = () => {
  const { data, error, loading } = useShipsListQuery();

  console.log('data', data);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  return <div></div>;
};
