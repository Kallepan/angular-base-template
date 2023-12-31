import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { messages } from '../constants/messages';
import { AuthService } from '../services/auth.service';
import { NotificationService } from '../services/notification.service';

// Guard to check if the user has the feature flag enabled
export function featureFlagGuard(
  flagName: string,
  redirectRoute: string,
): CanActivateFn {
  return () => {
    const authService = inject(AuthService);
    const router = inject(Router);
    const notificationService = inject(NotificationService);

    const isFeatureEnabled = authService.isFeatureEnabled(flagName);

    if (!isFeatureEnabled) {
      notificationService.warnMessage(messages.AUTH.UNAUTHORIZED);
    }

    return isFeatureEnabled || router.createUrlTree([redirectRoute]);
  };
}

// Simple guard to check if the user is authenticated
export const isAuthenticated = () => inject(AuthService).isLoggedIn();
