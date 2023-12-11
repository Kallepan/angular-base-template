import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NotificationService } from '@app/core/services/notification.service';
import { StandaloneOneComponent } from './standalone-one.component';

describe('StandaloneOneComponent', () => {
  let component: StandaloneOneComponent;
  let fixture: ComponentFixture<StandaloneOneComponent>;
  let notificationService: jasmine.SpyObj<NotificationService>;

  beforeEach(() => {
    notificationService = jasmine.createSpyObj('NotificationService', [
      'infoMessage',
    ]);

    TestBed.configureTestingModule({
      imports: [MatSnackBarModule],
      providers: [
        {
          provide: NotificationService,
          useValue: notificationService,
        },
      ],
    });
    fixture = TestBed.createComponent(StandaloneOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // should contain a <p> tag
  it('should contain a <p> tag', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('p')).toBeTruthy();
  });

  it('notificationService.infoMessage should be called', () => {
    expect(notificationService.infoMessage).toHaveBeenCalled();
  });
});
