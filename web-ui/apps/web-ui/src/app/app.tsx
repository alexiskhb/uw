import React, { useEffect, useState, useRef } from 'react';
import keycloak from '../auth/keycloak';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const isInitialized = useRef(false);

  useEffect(() => {
    if (!isInitialized.current) {
      isInitialized.current = true;
      keycloak
        .init({ onLoad: 'login-required' })
        .then((authenticated) => {
          setIsAuthenticated(authenticated);
        })
        .catch((err) => {
          console.error('Keycloak initialization failed:', err);
        });
    }
  }, []);

  return isAuthenticated ? <div>Welcome, user!</div> : <div>Loading....</div>;
};

export default App;
