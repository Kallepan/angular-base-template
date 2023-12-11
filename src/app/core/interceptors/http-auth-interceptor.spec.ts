import {
  HttpClient,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { constants } from '../constants/constants';
import { httpAuthInterceptor } from './http-auth-interceptor';

const TEST_URL = 'https://fake.url';
const AUTH_URL = constants.APIS.AUTH;

describe('HttpAuthInterceptorModule', () => {
  let client: HttpClient;
  let controller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(withInterceptors([httpAuthInterceptor])),
        provideHttpClientTesting(),
      ],
    });

    client = TestBed.inject(HttpClient);
    controller = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    controller.verify();
  });

  it('should be created', () => {
    expect(client).toBeTruthy();
  });

  it('should not add an Authorization header to a non-auth request', () => {
    client.get(TEST_URL).subscribe();
    const testReq = controller.expectOne(TEST_URL);
    expect(testReq.request.headers.has('Authorization')).toBeFalse();
  });

  it('should add an Authorization header to an auth request', () => {
    client.get(AUTH_URL).subscribe();
    const testReq = controller.expectOne(AUTH_URL);
    expect(testReq.request.headers.has('Authorization')).toBeTrue();
  });

  it('should add a Bearer token to the Authorization header', () => {
    client.get(AUTH_URL).subscribe();
    const testReq = controller.expectOne(AUTH_URL);
    expect(testReq.request.headers.get('Authorization')).toContain('Bearer');
  });

  it('should add the JWT_ACCESS_TOKEN to the Authorization header', () => {
    localStorage.setItem(constants.JWT.ACCESS_STORAGE, 'test_token');
    client.get(AUTH_URL).subscribe();
    const testReq = controller.expectOne(AUTH_URL);
    expect(testReq.request.headers.get('Authorization')).toContain(
      'test_token',
    );
    localStorage.removeItem(constants.JWT.ACCESS_STORAGE);
  });
});
