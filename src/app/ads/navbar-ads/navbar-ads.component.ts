import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-ads',
  templateUrl: './navbar-ads.component.html',
  styleUrls: ['./navbar-ads.component.css']
})
export class NavbarAdsComponent implements OnInit {

  isAuthenticated = false;

  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem('token')){
      this.isAuthenticated = true;
    }
  }

}
