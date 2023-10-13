import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { constants } from "../constants/constants";

@Injectable()
export class GlobalHttpInterceptor implements HttpInterceptor {
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