import { Injectable, inject } from "@angular/core";
import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { constants } from "./config/constants";
import { NotificationService } from "./shared/ui/notification/notification.service";

@Injectable()
export class GlobalInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    /* Check if logged in
    if (!this._authService.isLoggedIn()) {
      return next.handle(req);
    }*/

    // Check if target url is auth api endpoint
    if (!req.url.includes(constants.APIS.AUTH)) {
      return next.handle(req);
    }

    const JWT_ACCESS_TOKEN = localStorage.getItem(constants.JWT.ACCESS_STORAGE);

    const clonedReq = req.clone({
      headers: req.headers.set("Authorization", "Bearer " + JWT_ACCESS_TOKEN)
    });

    // Send request with token
    return next.handle(clonedReq);
  }
}

@Injectable()
export class ErrorCatchingInterceptor implements HttpInterceptor {
  private _notificationService = inject(NotificationService);

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        const errorMessage = error.error;

        // User Feedback 
        this._notificationService.infoMessage
        console.log(error);

        // Rethrow error
        const customError = {
          status: error.status,
          message: errorMessage,
        };
        return throwError(() => customError);
      }),
    );
  }
}