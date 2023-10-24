import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressGroupComponent } from './address-group.component';
import { ControlContainer, FormControl, FormGroup, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';

describe('AddressGroupComponent', () => {
  let component: AddressGroupComponent;
  let fixture: ComponentFixture<AddressGroupComponent>;

  beforeEach(() => {
    const fg: FormGroup = new FormGroup({
      'answer': new FormControl(''),
    });
    const fgd: FormGroupDirective = new FormGroupDirective([], []);
    fgd.form = fg;

    TestBed.configureTestingModule({
      imports: [AddressGroupComponent, ReactiveFormsModule],
      providers: [
        {
          provide: ControlContainer,
          useValue: fgd
        }
      ]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressGroupComponent);
    
    component = fixture.componentInstance;
    component.controlKey = "test";
    component.label = "test";
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a new form group control when initialized', () => {
    // Arrange
    const formGroup = new FormGroup({
      street: new FormControl(''),
      zipCode: new FormControl('')
    });
    spyOn(component.parentFormGroup, 'addControl');

    // Act
    component.ngOnInit();

    // Assert
    expect(component.parentFormGroup.addControl).toHaveBeenCalledWith(
      component.controlKey,
      jasmine.any(FormGroup)
    );
  });

  it('should remove the form group control when destroyed', () => {
    // Arrange
    spyOn(component.parentFormGroup, 'removeControl');

    // Act
    component.ngOnDestroy();

    // Assert
    expect(component.parentFormGroup.removeControl).toHaveBeenCalledWith('adress');
  });

});
