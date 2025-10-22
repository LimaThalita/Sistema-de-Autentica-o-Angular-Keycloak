import { Component } from '@angular/core';
import { keycloak } from './keycloak-init';

@Component({
  selector: 'app-root',
  template: `
    <div class="app-container">
      <header class="app-header">
        <h1>🔐Security Portal</h1>
        <div class="user-info">
          <span class="username">
            {{ keycloak.tokenParsed?.['preferred_username'] || 'Usuário' }}
          </span>
          <button class="register-btn" (click)="register()">Registrar-se</button>
          <button class="logout-btn" (click)="logout()">Sair</button>
        </div>
      </header>

      <main class="content">
        <div class="card">
          <h2>Bem-vinda, {{ keycloak.tokenParsed?.['preferred_username'] }}!</h2>
          <p>Você está autenticada com o Keycloak.</p>
        </div>
      </main>

      <footer class="app-footer">
        <p>© 2025 KeycloakXP – Sistema de Autenticação Segura</p>
      </footer>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  keycloak = keycloak;

  logout() {
    this.keycloak.logout({ redirectUri: window.location.origin });
  }

  register() {
  keycloak.register();
}

}
