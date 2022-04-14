import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IeLibComponent } from './ie-lib.component';



@NgModule({
  declarations: [
    IeLibComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    IeLibComponent
  ]
})
export class IeLibModule { }
