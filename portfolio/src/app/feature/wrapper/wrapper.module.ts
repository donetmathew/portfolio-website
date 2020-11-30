import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrapperComponent } from './wrapper.component';
import { WrapperRoutingModule } from './wrapper-routing.module';
import { HeaderComponent } from './header/header.component';
import { SideOrientationComponent } from './side-orientation/side-orientation.component';
import { IntroComponent } from './intro/intro.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [WrapperComponent, HeaderComponent, SideOrientationComponent, IntroComponent],
  imports: [
    CommonModule,
    WrapperRoutingModule,
    SharedModule
  ]
})
export class WrapperModule { }
