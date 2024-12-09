import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
  realm: 'uwatcher',
  url: 'https://uw.local/auth',
  clientId: 'web-ui',
});

export default keycloak;
