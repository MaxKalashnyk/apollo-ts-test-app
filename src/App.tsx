import React, { useState, useCallback } from 'react';
import { AppContainer } from './styles';
import LaunchList from './components/LaunchList/';
import LaunchProfile from './components/LaunchProfile/';

const App = () => {
  const [id, setId] = useState<number>(42);

  const changeId = useCallback((newId) => {
    setId(newId);
  }, []);

  return (
    <AppContainer>
      <LaunchList changeId={changeId} />
      <LaunchProfile id={id} />
    </AppContainer>
  );
};

export default App;
