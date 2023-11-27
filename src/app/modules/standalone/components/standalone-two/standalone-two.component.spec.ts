import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandaloneTwoComponent } from './standalone-two.component';
import { NotificationService } from '@app/core/services/notification.service';

describe('StandaloneTwoComponent', () => {
  let component: StandaloneTwoComponent;
  let fixture: ComponentFixture<StandaloneTwoComponent>;
  let notificationService: jasmine.SpyObj<NotificationService>;

  beforeEach(async () => {
    notificationService = jasmine.createSpyObj('NotificationService', ['infoMessage']);

    await TestBed.configureTestingModule({
      imports: [StandaloneTwoComponent],
      providers: [
        {
          provide: NotificationService,
          useValue: notificationService,
        },
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(StandaloneTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('notificationService.infoMessage should be called', () => {
    expect(notificationService.infoMessage).toHaveBeenCalled();
  });

  // should contain a <p> tag
  it('should contain a <p> tag', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('p')).toBeTruthy();
  });
});
