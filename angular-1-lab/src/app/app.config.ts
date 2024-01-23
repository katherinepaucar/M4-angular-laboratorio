import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { AuthGuardService } from './services/auth-guard/auth-guard.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimations(), importProvidersFrom(NgxWebstorageModule.forRoot(
    { prefix: 'miApp', separator: '-', caseSensitive:true }
  )), AuthGuardService]
};
