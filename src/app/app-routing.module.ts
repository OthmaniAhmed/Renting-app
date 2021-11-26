import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdsPageComponent } from './ads/ads-page/ads-page.component';
import { ApplyPageComponent } from './ads/apply-page/apply-page.component';
import { OneAdPageComponent } from './ads/one-ad-page/one-ad-page.component';
import { LoginComponentComponent } from './auth/login-component/login-component.component';
import { SignupComponentComponent } from './auth/signup-component/signup-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';

const routes: Routes = [
  {path: '', component: HomeComponentComponent},
  {path: 'login', component: LoginComponentComponent},
  {path: 'sign', component: SignupComponentComponent},
  {path: 'ads', component: AdsPageComponent},
  {path: 'apply', component: ApplyPageComponent},
  {path: 'offer/:id', component: OneAdPageComponent},  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
