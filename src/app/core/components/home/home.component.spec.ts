import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

describe('HomeComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HomeComponent, RouterTestingModule, MatButtonModule, MatTooltipModule,]
        });
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have as many buttons as links', () => {
        // Get number of buttons
        const compiled = fixture.debugElement.nativeElement;
        const buttons = compiled.querySelectorAll('button');

        // Get number of links
        expect(component.routes.length).toEqual(buttons.length);
    });
});
