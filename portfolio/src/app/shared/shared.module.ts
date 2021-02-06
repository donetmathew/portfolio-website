import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { TypedComponent } from './typed/typed.component';
import { TitleComponent } from './title/title.component';


@NgModule({
  declarations: [TypedComponent, TitleComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports:[TypedComponent,TitleComponent]
})
export class SharedModule { }
