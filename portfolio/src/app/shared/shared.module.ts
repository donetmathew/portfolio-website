import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { TypedComponent } from './typed/typed.component';


@NgModule({
  declarations: [TypedComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports:[TypedComponent]
})
export class SharedModule { }
