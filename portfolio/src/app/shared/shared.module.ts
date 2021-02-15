import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { TypedComponent } from './typed/typed.component';
import { TitleComponent } from './title/title.component';
import { CarouselComponent } from './carousel/carousel.component';


@NgModule({
  declarations: [TypedComponent, TitleComponent, CarouselComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports:[TypedComponent,TitleComponent,CarouselComponent]
})
export class SharedModule { }
