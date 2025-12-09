import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { App } from './app/app';
import { appConfig } from './app/app.config';
import { authTokenInterceptor } from './app/auth/auth-token.interceptor';

bootstrapApplication(App, {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),
    importProvidersFrom(BrowserAnimationsModule),
    provideHttpClient(withInterceptors([authTokenInterceptor]))
  ]
});
