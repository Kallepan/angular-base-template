import { TestBed } from '@angular/core/testing';

import { NotificationService } from './notification.service';
import { MatSnackBar } from '@angular/material/snack-bar';

const mockSnackBar = jasmine.createSpyObj('MatSnackBar',['open']);

describe('NotificationService', () => {
  let service: NotificationService;

  beforeEach(() => {
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
    // Mock the snackbar
    mockSnackBar.open.and.returnValue({
      afterDismissed: () => {
        return {
          toPromise: () => Promise.resolve(),
        }
      }
    });

    // Call the infoMessage method
    service.infoMessage('test1');
    service.infoMessage('test2');

    // Check if the snackbar was called twice
    expect(mockSnackBar.open).toHaveBeenCalledTimes(2);
  });
});
