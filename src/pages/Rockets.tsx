import * as React from 'react';
import { RocketsList } from '../components/RocketsList';

export const Rockets: React.FC = () => {
  return (
    <div>
      <h2>Rockets</h2>
      <RocketsList />
    </div>
  );
};
