import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { GlobalHttpInterceptor } from './interceptors/http-global-interceptors.module';
import { ErrorHttpInterceptor } from './interceptors/http-error-interceptor.module';
import { NotificationService } from './services/notification.service';
import { AppRoutingModule } from '@app/app-routing.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  imports: [
    MainComponent,
    CommonModule,
    MatSnackBarModule,
  ],
  exports: [
    MainComponent,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, 
      useClass: GlobalHttpInterceptor, 
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHttpInterceptor,
      multi: true,
    },
    NotificationService,
  ]
})
export class CoreModule { }
