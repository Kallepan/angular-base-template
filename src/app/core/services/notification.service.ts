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
    this._message.next({ message, type: 'info' });
  }

  warnMessage(message: string) {
    this._message.next({ message, type: 'warn' });
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
    ).subscribe(res => {
      this._snackBar.open(res.message, 'Dismiss', {
        duration: 3000,
        horizontalPosition: this._horizontalPosition,
        verticalPosition: this._verticalPosition,
      });
    }); // This is technically a memory leak, but it's a singleton service so it's fine
  }
}
