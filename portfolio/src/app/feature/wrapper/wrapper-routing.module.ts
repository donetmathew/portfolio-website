import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';
import {WrapperComponent} from '../wrapper/wrapper.component';

const routes: Routes = [{
  path:"",
  component: WrapperComponent
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CoreModule
  ],
  exports: [RouterModule]
})
export class WrapperRoutingModule { }
