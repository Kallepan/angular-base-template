import { inject } from "@angular/core"
import { Router } from "@angular/router"
import { NotificationService } from "../services/notification.service";

export const authGuard = () => {
    const router = inject(Router);
    const notification = inject(NotificationService);
    // TODO completeME
    return false;
}