import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import {
  provideClientHydration,
  withHttpTransferCacheOptions,
} from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { httpAuthInterceptor } from './core/interceptors/http-auth-interceptor';
import { httpErrorInterceptor } from './core/interceptors/http-error-interceptor';
import { NotificationService } from './core/services/notification.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideClientHydration(
      withHttpTransferCacheOptions({
        includePostRequests: true,
      }),
    ),
    provideHttpClient(
      withFetch(),
      withInterceptors([httpErrorInterceptor, httpAuthInterceptor]),
    ),
    NotificationService,
  ],
};
