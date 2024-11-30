import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
  realm: 'uwatcher',
  url: 'http://localhost/auth',
  clientId: 'web-ui',
});

export default keycloak;
