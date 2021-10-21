import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { FirstPageComponent } from './home-component/first-page/first-page.component';
import { NavBarComponent } from './home-component/nav-bar/nav-bar.component';
import { SecondPageComponent } from './home-component/second-page/second-page.component';
import { ThirdPageComponent } from './home-component/third-page/third-page.component';
import { ContactPageComponent } from './home-component/contact-page/contact-page.component';
import { LoginComponentComponent } from './auth/login-component/login-component.component';
import { SignupComponentComponent } from './auth/signup-component/signup-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    FirstPageComponent,
    NavBarComponent,
    SecondPageComponent,
    ThirdPageComponent,
    ContactPageComponent,
    LoginComponentComponent,
    SignupComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
