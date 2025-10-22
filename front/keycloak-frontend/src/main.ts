import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { initKeycloak } from './app/keycloak-init';

initKeycloak(() => {
  bootstrapApplication(AppComponent, appConfig)
    .catch(err => console.error(err));
});
