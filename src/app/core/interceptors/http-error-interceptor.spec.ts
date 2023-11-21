import { TestBed, fakeAsync, tick } from "@angular/core/testing";
import { NotificationService } from "../services/notification.service";
import { HttpClient, provideHttpClient, withInterceptors } from "@angular/common/http";
import { HttpTestingController, provideHttpClientTesting } from "@angular/common/http/testing";
import { messages } from "../constants/messages";
import { httpErrorInterceptor } from "./http-error-interceptor";

const TEST_URL = 'https://fake.url';

describe('HttpErrorInterceptorModule', () => {
    let client: HttpClient;
    let controller: HttpTestingController;
    let notificationService: jasmine.SpyObj<NotificationService>;

    beforeEach(() => {
        notificationService = jasmine.createSpyObj('NotificationService', ['warnMessage']);

        TestBed.configureTestingModule({
            providers: [
                provideHttpClient(
                    withInterceptors([httpErrorInterceptor])
                ),
                provideHttpClientTesting(),
                {
                    provide: NotificationService,
                    useValue: notificationService,
                },
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

    it('should show a warning message when a 400 error occurs', fakeAsync(() => {
        // interceptor creates the error object
        const expected = { message: messages.GENERAL.BAD_REQUEST, status: 400 };
        client.get(TEST_URL).subscribe({
            error: (error) => {
                expect(error.status).toEqual(expected.status);
                expect(error.message).toEqual(expected.message);
            },
        });

        // we need the request to be flushed with a 400 error
        const testReq = controller.expectOne(TEST_URL);
        testReq.flush({}, { status: 400, statusText: 'This request was bad' });

        tick();

        // the interceptor should have called the notification service
        expect(notificationService.warnMessage).toHaveBeenCalledTimes(1);
    }));
});