import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { constants } from '../constants/constants';
import { NotificationService } from './notification.service';
import { AuthObject, CookieAuthResponse, TokenAuthResponse } from '../interfaces/auth_object';
import { catchError, filter, map, of, tap } from 'rxjs';
import { messages } from '../constants/messages';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _http = inject(HttpClient);
  private _notificationService = inject(NotificationService);

  authData = signal<AuthObject|null>(null);

  verifyLogin() {
    /**
     * Check using the API /auth/verify if the user is logged in.
     * This is for httpOnly cookies.
     */

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      withCredentials: true as const,
    };

    this._http.get<CookieAuthResponse>(constants.APIS.VERIFY, httpOptions).pipe(
      map(data => {
        return {
          username: data.username,
          department: data.department,
          featureFlags: data.feature_flags,
        };
      }),
      tap(data => this._notificationService.infoMessage(`Welcome back, ${data.username}`)),
    ).subscribe({
      next: (data) => {
        this.authData.set(data);
      },
      error: () => {
        this._notificationService.warnMessage(messages.AUTH.INVALID_CREDENTIALS);
      }
    });
  }

  login(username: string, password: string) {
    /**
     * Login using the API /auth/login.
     **/

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    this._http.post<TokenAuthResponse>(constants.APIS.AUTH, { username, password }, httpOptions).pipe(
      tap(data => {
        // store tokens and expiry time in local storage to keep user logged in between page refreshes
        localStorage.setItem(constants.JWT.ACCESS_STORAGE, data.access_token);
        localStorage.setItem(constants.JWT.EXPIRY_TIME_STORAGE, data.expires_at);
      }),
      map(data => {
        return {
          username: data.username,
          department: data.department,
          featureFlags: data.feature_flags,
          accessToken: data.access_token,
          refreshToken: data.refresh_token,
          expiresAt: data.expires_at ? new Date(data.expires_at) : undefined,
        };
      }),
      tap(data => this._notificationService.infoMessage(`Welcome back, ${data.username}`)),
    ).subscribe({
      next: (data) => {
        this.authData.set(data);
      },
      error: () => {
        this._notificationService.warnMessage(messages.AUTH.INVALID_CREDENTIALS);
      }
    });
  }
}
