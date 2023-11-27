import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn(): boolean {
    return false;
  }

  isFeatureEnabled(flagName: string): boolean {
    return false;
  }
}
