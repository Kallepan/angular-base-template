import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { AuthObject, CookieAuthResponse } from '../interfaces/auth_object';
import { provideHttpClient } from '@angular/common/http';
import { constants } from '../constants/constants';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { NotificationService } from './notification.service';

describe('AuthService', () => {
  let service: AuthService;
  let httpTestingController: HttpTestingController;
  let notificationService: jasmine.SpyObj<NotificationService>;

  beforeEach(() => {
    notificationService = jasmine.createSpyObj<NotificationService>('NotificationService', ['warnMessage', 'infoMessage']);
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideNoopAnimations(),
        provideHttpClient(),
        provideHttpClientTesting(),
        { provide: NotificationService, useValue: notificationService },
      ]
    });
    service = TestBed.inject(AuthService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
    expect(service.authData()).toBeNull();
  });

  it('should have verifyLogin method', () => {
    expect(service.verifyLogin).toBeTruthy();
  });

  it('should have login method', () => {
    expect(service.login).toBeTruthy();
  });

  it('should handle successful verifyLogin', () => {
    service.verifyLogin();

    const req = httpTestingController.expectOne(constants.APIS.VERIFY);
    expect(req.request.method).toEqual('GET');
    expect(req.request.withCredentials).toEqual(true);

    req.flush({
      username: 'test',
      department: 'test',
      feature_flags: ['test1', 'test2'],
    } as CookieAuthResponse);

    expect(service.authData()).toEqual({
      username: 'test',
      department: 'test',
      featureFlags: ['test1', 'test2'],
    } as AuthObject);

    expect(notificationService.infoMessage).toHaveBeenCalledWith('Welcome back, test');
  });

  it('should handle failed verifyLogin', () => {
    service.verifyLogin();

    const req = httpTestingController.expectOne(constants.APIS.VERIFY);
    expect(req.request.method).toEqual('GET');
    expect(req.request.withCredentials).toEqual(true);

    req.flush({}, { status: 401, statusText: 'Unauthorized' });

    expect(service.authData()).toBeNull();
    expect(notificationService.warnMessage).toHaveBeenCalled();
  });

  it('should handle successful login', () => {
    service.login('test', 'test');

    const req = httpTestingController.expectOne(constants.APIS.AUTH);
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual({
      username: 'test',
      password: 'test',
    });

    req.flush({
      username: 'test',
      department: 'test',
      feature_flags: ['test1', 'test2'],
      access_token: 'test',
      refresh_token: 'test',
      expires_at: '2021-01-01T00:00:00.000Z',
    });

    expect(service.authData()).toEqual({
      username: 'test',
      department: 'test',
      featureFlags: ['test1', 'test2'],
      accessToken: 'test',
      refreshToken: 'test',
      expiresAt: new Date('2021-01-01T00:00:00.000Z'),
    } as AuthObject);

    expect(notificationService.infoMessage).toHaveBeenCalledWith('Welcome back, test');
  });

  it('should handle failed login', () => {
    service.login('test', 'test');

    const req = httpTestingController.expectOne(constants.APIS.AUTH);
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual({
      username: 'test',
      password: 'test',
    });

    req.flush({}, { status: 401, statusText: 'Unauthorized' });

    expect(service.authData()).toBeNull();
    expect(notificationService.warnMessage).toHaveBeenCalled();
  });
});
