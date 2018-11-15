import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { DevicesComponent }  from "./components/devices/devices.component";
import { NotFoundPageComponent } from "./components/not-found-page/not-found-page.component";
import { AuthGuard } from "./guards/auth.guard";

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'devices', component:DevicesComponent, canActivate: [AuthGuard]},
  {path: '**', component:NotFoundPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
