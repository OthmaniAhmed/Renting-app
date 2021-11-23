import { Component, HostListener, OnInit } from '@angular/core';
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
  constructor(private authService : AuthService) { }

  ngOnInit(): void {
    if(localStorage.getItem('token')){
      this.isAuthenticated = true;
    }

  this.userName = localStorage.getItem('username') ;
  console.log(this.userName+"88"+this.isAuthenticated)
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
