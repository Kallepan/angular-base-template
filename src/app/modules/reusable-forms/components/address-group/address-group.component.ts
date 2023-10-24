import { Component, Input, OnDestroy, OnInit, inject } from '@angular/core';
import { ControlContainer, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-address-group',
  standalone: true,
  imports: [
    ReactiveFormsModule,
  ],
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer, {skipSelf: true})
    }
  ],
  styleUrls: ['./address-group.component.scss'],
  template: `
    <fieldset [formGroupName]="controlKey">
    <legend>{{label}}</legend>
      <div class="form-field">
        <label for="zipCode">Zip Code</label>
        <input type="text" id="zipCode" formControlName="zipCode">
      </div>
      <div class="form-field">
        <label for="address">Street</label>
        <input type="text" id="address" formControlName="street">
      </div>
    </fieldset>
  `
})
export class AddressGroupComponent implements OnInit, OnDestroy {
  @Input({ required: true }) controlKey = '';
  @Input() label = '';

  parentContainer = inject(ControlContainer);

  get parentFormGroup() {
    return this.parentContainer.control as FormGroup;
  }

  ngOnInit(): void {
    this.parentFormGroup.addControl(this.controlKey, new FormGroup({
      zipCode: new FormControl(''),
      street: new FormControl(''),
    }));
  }

  ngOnDestroy(): void {
    this.parentFormGroup.removeControl('adress');
  }
}
