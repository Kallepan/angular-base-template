import { TestBed, fakeAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';


describe('AppComponent', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [provideNoopAnimations(), provideRouter([])],
    });
  });

  it('should create the app', fakeAsync(() => {
    const app = TestBed.createComponent(AppComponent).componentInstance;
    expect(app).toBeTruthy();
  }));

  it("should contain app-main", () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-main')).toBeTruthy();
  });
});
