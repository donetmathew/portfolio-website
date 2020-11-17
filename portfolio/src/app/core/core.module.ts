import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ConfigService} from './config.service';
import { CoreRoutingModule } from './core-routing.module';


@NgModule({
  declarations: [],
  providers:[ConfigService],
  imports: [
    CommonModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }
