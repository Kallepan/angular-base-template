import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandaloneComponent } from './standalone.component';
import { NotificationService } from '@app/core/services/notification.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('StandaloneComponent', () => {
  let component: StandaloneComponent;
  let fixture: ComponentFixture<StandaloneComponent>;
  let notificationService: NotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MatSnackBarModule,
      ],
      providers: [
        NotificationService,
      ]
    });
    fixture = TestBed.createComponent(StandaloneComponent);
    component = fixture.componentInstance;
    notificationService = TestBed.inject(NotificationService);
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
});
