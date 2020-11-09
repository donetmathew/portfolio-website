import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrapperComponent } from './wrapper.component';
import { WrapperRoutingModule } from './wrapper-routing.module';



@NgModule({
  declarations: [WrapperComponent],
  imports: [
    CommonModule,
    WrapperRoutingModule
  ]
})
export class WrapperModule { }
