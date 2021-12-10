import { Component, HostListener, OnInit } from '@angular/core';
import { AdsService } from 'src/app/ads/ads.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  scroll_postion = false ;

  isAuthenticated : boolean | undefined;
  userName : String | null | undefined ;
  constructor(private authService : AuthService,private adsService : AdsService) { }
  
  replysNumber = 0 ;


  ngOnInit(): void {
    if(localStorage.getItem('token')){
      this.isAuthenticated = true;
    }

  this.userName = localStorage.getItem('username') ;

  this.replysNumber = this.adsService.getNumberOfRplys();
  }

  scrollTo(tag : string){
    document.getElementById(tag)?.scrollIntoView();
  }


  @HostListener("document:scroll")
  scrollfunction(){
    if(document.body.scrollTop > 30 || document.documentElement.scrollTop > 30){
      this.scroll_postion = true;
    }else{
      this.scroll_postion = false ;
    } 
  }

  logout(){
    this.authService.logout();
  }



}
