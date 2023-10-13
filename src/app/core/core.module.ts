import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';



@NgModule({
  imports: [
    MainComponent,
    CommonModule,
  ],
  exports: [
    MainComponent,
  ]
})
export class CoreModule { }
