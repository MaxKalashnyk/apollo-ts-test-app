import * as React from 'react';
import { useRocketsListQuery } from '../../generated/graphql';

export const RocketsList: React.FC = () => {
  const { data, error, loading } = useRocketsListQuery();

  console.log('data', data);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  return <div></div>;
};
