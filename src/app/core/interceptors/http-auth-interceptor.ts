import {
  HttpEvent,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { constants } from '../constants/constants';

export const httpAuthInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
): Observable<HttpEvent<unknown>> => {
  // filter out requests that do not go to our api
  if (!req.url.includes(constants.APIS.AUTH)) {
    return next(req);
  }

  // Fetch Token from localstorage.
  // localstorage tokens are not secure, but this is just a demo
  // refer to httpCookies for a more secure approach
  const JWT_ACCESS_TOKEN = localStorage.getItem(constants.JWT.ACCESS_STORAGE);

  const clonedReq = req.clone({
    headers: req.headers.set('Authorization', 'Bearer ' + JWT_ACCESS_TOKEN),
  });

  // Send request with token
  return next(clonedReq);
};
