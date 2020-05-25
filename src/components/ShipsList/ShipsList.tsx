import * as React from 'react';
import { useShipsListQuery } from '../../generated/graphql';
import LazyImage from '../LazyImage/LazyImage';

export const ShipsList: React.FC = () => {
  const { data, error, loading } = useShipsListQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  return (
    <>
      {!!data.ships &&
        data.ships.map(
          (ship, i) =>
            !!ship && (
              <div>
                <div>Ship name</div>
                <div>{ship.ship_name}</div>
                <div>Ship type</div>
                <div>{ship.ship_type}</div>
                <div>Ship type</div>
                <div>{ship.ship_id}</div>
                {!!ship.image && <LazyImage imgSrc={ship.image} />}
              </div>
            )
        )}
    </>
  );
};
