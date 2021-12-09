import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';


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
import { AdsPageComponent } from './ads/ads-page/ads-page.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ApplyPageComponent } from './ads/apply-page/apply-page.component';
import { HttpClientModule } from '@angular/common/http';
import { OneAdPageComponent } from './ads/one-ad-page/one-ad-page.component';
import { AdCreateComponent } from './ads/ad-create/ad-create.component';
import { ReplysComponent } from './ads/replys/replys.component';
import { NavbarAdsComponent } from './ads/navbar-ads/navbar-ads.component';
import {MatPaginatorModule} from '@angular/material/paginator';



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
    SignupComponentComponent,
    AdsPageComponent,
    ApplyPageComponent,
    OneAdPageComponent,
    AdCreateComponent,
    ReplysComponent,
    NavbarAdsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatMenuModule,
    MatButtonModule, 
    MatSelectModule,
    MatExpansionModule,
    MatIconModule,
    MatPaginatorModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
