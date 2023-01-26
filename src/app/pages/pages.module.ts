import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule  ,ReactiveFormsModule} from '@angular/forms';
import { MensageComponent } from './mensage/mensage.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    LoginComponent,
    MensageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    
   
  ],
  exports:[
    LoginComponent,
    MensageComponent
  ]
})
export class PagesModule { }
