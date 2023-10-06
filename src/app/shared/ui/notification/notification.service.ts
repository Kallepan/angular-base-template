import { Injectable, inject } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Subject, concatMap, map, of, tap } from 'rxjs';

/** 
 * This service is used to display notifications to the user.
 * 
*/

type Message = {
  message: string;
  type: 'info' | 'warn';
}

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private _horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  private _verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  private _snackBar = inject(MatSnackBar);
  private _message = new Subject<Message>();

  infoMessage(message: string) {
    this._snackBar.open(message, 'OK', {
      duration: 5000,
      horizontalPosition: this._horizontalPosition,
      verticalPosition: this._verticalPosition,
      panelClass: ['info-snackbar']
    });
  }

  warnMessage(message: string) {
    this._snackBar.open(message, 'OK', {
      duration: 5000,
      horizontalPosition: this._horizontalPosition,
      verticalPosition: this._verticalPosition,
      panelClass: ['warn-snackbar']
    });
  }

  private _getSnackBarDelay(message: Message) {
    const snackbarRef = this._snackBar._openedSnackBarRef;
    if (!!snackbarRef) {
      return snackbarRef.afterDismissed().pipe(
        map(() => message),
      );
    }

    return of(message);
  }
  constructor() {
    this._message.pipe(
      concatMap(message => this._getSnackBarDelay(message)),
      tap(message => {
        switch (message.type) {
          case 'info':
            this.infoMessage(message.message);
            break;
          case 'warn':
            this.warnMessage(message.message);
            break;
          default:
            break;
        }
      }),
    ).subscribe(); // This is technically a memory leak, but it's a singleton service so it's fine
  }
}
