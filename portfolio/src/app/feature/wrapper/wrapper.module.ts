import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { WrapperComponent } from './wrapper.component';
import { WrapperRoutingModule } from './wrapper-routing.module';
import { HeaderComponent } from './header/header.component';
import { SideOrientationComponent } from './side-orientation/side-orientation.component';
import { IntroComponent } from './intro/intro.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { QuotesComponent } from './quotes/quotes.component';
import { FooterComponent } from './footer/footer.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [WrapperComponent, ContactComponent, SkillsComponent, HeaderComponent, SideOrientationComponent, IntroComponent, AboutComponent, ExperienceComponent, QuotesComponent, FooterComponent],
  imports: [
    CommonModule,
    WrapperRoutingModule,
    SharedModule,
    NgOptimizedImage,
    ReactiveFormsModule
  ]
})
export class WrapperModule { }
