import { Component, OnInit } from '@angular/core';
import { AdsService } from '../ads.service';

@Component({
  selector: 'app-ads-page',
  templateUrl: './ads-page.component.html',
  styleUrls: ['./ads-page.component.css']
})
export class AdsPageComponent implements OnInit {

  public ads : any = [] ;
  
  constructor(private adsService : AdsService) { }

  ngOnInit(): void {
    this.adsService.getAds().subscribe(data => this.ads = data);


}


}
