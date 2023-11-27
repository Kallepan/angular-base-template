import { TestBed } from '@angular/core/testing';

import { NotificationService } from './notification.service';
import { MatSnackBar } from '@angular/material/snack-bar';

describe('NotificationService', () => {
  let service: NotificationService;
  let mockSnackBar: jasmine.SpyObj<MatSnackBar>;

  beforeEach(() => {
    // Mock the snackbar
    mockSnackBar = jasmine.createSpyObj<MatSnackBar>('MatSnackBar', ['open']);

    TestBed.configureTestingModule({
      providers: [
        { provide: MatSnackBar, useValue: mockSnackBar },
      ]
    });
    service = TestBed.inject(NotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Do not remove these methods
  it('should have infoMessage method', () => {
    expect(service.infoMessage).toBeTruthy();
  });
  it('should have warnMessage method', () => {
    expect(service.warnMessage).toBeTruthy();
  });

  it('should display info message', () => {
    spyOn(service, 'infoMessage');
    service.infoMessage('test');

    // Check if the infoMessage method was called
    expect(service.infoMessage).toHaveBeenCalled();
    expect(service.infoMessage).toHaveBeenCalledWith('test');
  });

  it('test queueing of messages', async () => {
    // Call the infoMessage method
    service.infoMessage('test1');
    service.infoMessage('test2');

    // Check if the snackbar was called twice
    expect(mockSnackBar.open).toHaveBeenCalledTimes(2);
  });

  it('should display correct css class for info message', () => {
    // Call the infoMessage method
    service.infoMessage('test');

    // Check if the snackbar was called with the correct css class
    expect(mockSnackBar.open).toHaveBeenCalledWith('test', 'Dismiss', {
      duration: 3000,
      horizontalPosition: 'start',
      verticalPosition: 'bottom',
      panelClass: `info-snackbar`,
    });
  });

  it('should display correct css class for warn message', () => {
    // Call the warnMessage method
    service.warnMessage('test');

    // Check if the snackbar was called with the correct css class
    expect(mockSnackBar.open).toHaveBeenCalledWith('test', 'Dismiss', {
      duration: 3000,
      horizontalPosition: 'start',
      verticalPosition: 'bottom',
      panelClass: `warn-snackbar`,
    });
  });
});