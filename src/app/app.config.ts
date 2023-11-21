import { ApplicationConfig } from "@angular/core";
import { provideRouter } from "@angular/router";
import { routes } from "./app.routes";
import { NotificationService } from "./core/services/notification.service";
import { provideHttpClient, withInterceptors } from "@angular/common/http";
import { provideClientHydration, withHttpTransferCacheOptions } from "@angular/platform-browser";
import { provideAnimations } from "@angular/platform-browser/animations";
import { httpErrorInterceptor } from "./core/interceptors/http-error-interceptor";
import { httpAuthInterceptor } from "./core/interceptors/http-auth-interceptor";

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
            withInterceptors([
                httpErrorInterceptor,
                httpAuthInterceptor,
            ]),
        ),
        NotificationService,
    ]
}