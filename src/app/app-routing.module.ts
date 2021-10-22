import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponentComponent } from './auth/login-component/login-component.component';
import { SignupComponentComponent } from './auth/signup-component/signup-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';

const routes: Routes = [
  {path: '', component: HomeComponentComponent},
  {path: 'login', component: LoginComponentComponent},
  {path: 'sign', component:SignupComponentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
