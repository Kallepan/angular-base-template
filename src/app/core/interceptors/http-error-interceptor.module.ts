import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, catchError, throwError } from "rxjs";
import { NotificationService } from "../services/notification.service";
import { Injectable, inject } from "@angular/core";
import { messages } from "../constants/messages";

@Injectable()
export class ErrorHttpInterceptor implements HttpInterceptor {
  private _notificationService = inject(NotificationService);

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage;

        // The user does not care about backend errors, therefore we only show general error messages
        switch (error.status) {
          case 400:
            errorMessage = messages.GENERAL.BAD_REQUEST;
            break;
          case 401:
            errorMessage = messages.AUTH.UNAUTHORIZED;
            break;
          case 403:
            errorMessage = messages.AUTH.FORBIDDEN;
            break;
          case 500:
            errorMessage = messages.GENERAL.SERVER_ERROR;
            break;
          default:
            return throwError(() => error);
        };

        // User Feedback 
        this._notificationService.warnMessage(errorMessage);

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