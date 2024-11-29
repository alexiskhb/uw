import React, { useEffect, useState } from 'react';
import keycloak from '../auth/keycloak';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    keycloak.init({ onLoad: 'login-required' }).then((authenticated) => {
      setIsAuthenticated(authenticated);
    });
  }, []);

  return isAuthenticated ? <AuthenticatedApp /> : <div>Loading...</div>;
};

const AuthenticatedApp = () => {
  return <div>Welcome, user!</div>;
};

export default App;
