import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
  url: 'http://localhost:8080',
  realm: 'uwatcher',
  clientId: 'web-ui',
});

export default keycloak;
