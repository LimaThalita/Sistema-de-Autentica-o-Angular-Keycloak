
import Keycloak from 'keycloak-js';

export const keycloak = new Keycloak({
  url: 'http://localhost:8181/',
  realm: 'keycloakxp',
  clientId: 'keycloakxp'
});

export function initKeycloak(onAuthenticatedCallback: () => void): void {
  keycloak.init({
    onLoad: 'login-required',
    checkLoginIframe: false
  }).then((authenticated) => {
    if (authenticated) {
      onAuthenticatedCallback();
    } else {
      keycloak.login();
    }
  }).catch((err) => {
    console.error('Erro ao inicializar Keycloak:', err);
  });
}
