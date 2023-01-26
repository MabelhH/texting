import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioGuard } from './guard/usuario.guard';
import { LoginComponent } from './pages/login/login.component';
import { MensageComponent } from './pages/mensage/mensage.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'mensage',component:MensageComponent ,canActivate:[UsuarioGuard]},
  {path:'',redirectTo:'/login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
