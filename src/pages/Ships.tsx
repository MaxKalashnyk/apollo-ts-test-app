import * as React from 'react';
import { ShipsList } from '../components/ShipsList';

export const Ships: React.FC = () => {
  return (
    <div>
      <h2>Ships</h2>
      <ShipsList />
    </div>
  );
};
