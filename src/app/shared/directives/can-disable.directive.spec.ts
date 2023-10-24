import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CanDisableDirective } from './can-disable.directive';

@Component({
    template: `
    <button canDisable [disabled]="disabled">Click me</button>
  `
})
class TestComponent {
    disabled = false;
}

describe('CanDisableDirective', () => {
    let component: TestComponent;
    let fixture: ComponentFixture<TestComponent>;
    let button: HTMLButtonElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [CanDisableDirective],
            declarations: [TestComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        component = fixture.componentInstance;
        button = fixture.debugElement.query(By.css('button')).nativeElement;
        fixture.detectChanges();
    });

    it('should create an instance', () => {
        const directive = new CanDisableDirective();
        expect(directive).toBeTruthy();
    });

    it('should not have the disabled class when disabled is false', () => {
        expect(button.classList).not.toContain('disabled');
    });

    it('should have the disabled class when disabled is true', () => {
        component.disabled = true;
        fixture.detectChanges();
        expect(button.classList).toContain('disabled');
    });

    it('should have the disabled attribute when disabled is true', () => {
        component.disabled = true;
        fixture.detectChanges();
        expect(button.getAttribute('disabled')).toEqual('');
    });

    it('should prevent click events when disabled is true', () => {
        component.disabled = true;
        fixture.detectChanges();
        const spy = jasmine.createSpy('onClick');
        button.addEventListener('click', spy);
        button.click();
        expect(spy).not.toHaveBeenCalled();
    });
});