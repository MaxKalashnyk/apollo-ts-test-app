import React from 'react';
import { Link } from 'react-router-dom';

export const Unauthorized: React.FC = () => (
  <>
    <h1>Unauthorized</h1>
    <p>
      <Link to="/">Back to Home</Link>
    </p>
  </>
);
