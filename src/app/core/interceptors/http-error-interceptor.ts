import { HttpErrorResponse, HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { Observable, catchError, throwError } from "rxjs";
import { NotificationService } from "../services/notification.service";
import { inject } from "@angular/core";
import { messages } from "../constants/messages";

export const httpErrorInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
    const notificationService = inject(NotificationService);

    return next(req).pipe(
        catchError((error: HttpErrorResponse) => {
            let errorMessage = messages.GENERAL.UNKNOWN_ERROR;

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
            notificationService.warnMessage(errorMessage);

            // Rethrow error
            const customError = {
                status: error.status,
                message: errorMessage,
            };
            return throwError(() => customError);
        }),
    )
};