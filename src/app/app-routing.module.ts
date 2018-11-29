import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import {AuthguardGuard} from './authguard.guard';
const routes: Routes = [
  {path:"", component:LoginComponent},
  {path:"dashbord",canActivate: [AuthguardGuard], component:DashbordComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
