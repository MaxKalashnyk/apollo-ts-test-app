import React, { useState, useCallback } from 'react';
import { HomeWrap } from '../styles';
import { LaunchList } from '../components/LaunchList';
import { LaunchProfile } from '../components/LaunchProfile';

export const Home: React.FC = () => {
  const [id, setId] = useState<number>(42);

  const changeId = useCallback((newId) => {
    setId(newId);
  }, []);
  return (
    <>
      <HomeWrap>
        <LaunchList changeId={changeId} />
        <LaunchProfile id={id} />
      </HomeWrap>
    </>
  );
};
