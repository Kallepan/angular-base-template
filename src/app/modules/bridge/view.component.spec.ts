import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ViewComponent } from "./view.component";


describe('ViewComponent', () => {
    let component: ViewComponent;
    let fixture: ComponentFixture<ViewComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ViewComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ViewComponent);

        component = fixture.componentInstance;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

});