import { ApplicationConfig } from "@angular/core";
import { provideRouter } from "@angular/router";
import { routes } from "./app.routes";
import { NotificationService } from "./core/services/notification.service";
import { ErrorHttpInterceptor } from "./core/interceptors/http-error-interceptor.module";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { GlobalHttpInterceptor } from "./core/interceptors/http-global-interceptors.module";
import { provideClientHydration, withHttpTransferCacheOptions } from "@angular/platform-browser";
import { provideAnimations, provideNoopAnimations } from "@angular/platform-browser/animations";

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes),
        provideAnimations(),
        provideClientHydration(
            withHttpTransferCacheOptions({
                includePostRequests: true,
            }),
        ),
        {
            provide: HTTP_INTERCEPTORS,
            useClass: GlobalHttpInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorHttpInterceptor,
            multi: true,
        },
        NotificationService,
    ]
}