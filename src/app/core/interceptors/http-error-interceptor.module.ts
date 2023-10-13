import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, catchError, throwError } from "rxjs";
import { NotificationService } from "../services/notification.service";
import { Injectable, inject } from "@angular/core";

@Injectable()
export class ErrorHttpInterceptor implements HttpInterceptor {
  private _notificationService = inject(NotificationService);

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        const errorMessage = error.error;

        // User Feedback 
        this._notificationService.infoMessage(errorMessage);
        
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