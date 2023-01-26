import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbartComponent } from './navbart/navbart.component';
import { PagesModule } from '../pages/pages.module';
import { RouterLink, RouterLinkActive } from '@angular/router';



@NgModule({
  declarations: [
    NavbartComponent
  ],
  imports: [
    CommonModule,
    PagesModule,
    RouterLink,
    RouterLinkActive
  ],
  exports:[
    NavbartComponent
  ]
})
export class ComponentesModule { }
