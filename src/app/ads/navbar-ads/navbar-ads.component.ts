import { Component, OnInit } from '@angular/core';
import { AdsService } from '../ads.service';

@Component({
  selector: 'app-navbar-ads',
  templateUrl: './navbar-ads.component.html',
  styleUrls: ['./navbar-ads.component.css']
})
export class NavbarAdsComponent implements OnInit {

  isAuthenticated = false;
  replysNumber = 0 ;


  constructor(private adsService : AdsService) { }

  ngOnInit(): void {
    if(localStorage.getItem('token')){
      this.isAuthenticated = true;
    }
    this.adsService.setNumberOfRplys()

    this.replysNumber = this.adsService.getNumberOfRplys();
  }

}
