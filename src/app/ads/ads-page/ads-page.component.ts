import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { AdsService } from '../ads.service';

@Component({
  selector: 'app-ads-page',
  templateUrl: './ads-page.component.html',
  styleUrls: ['./ads-page.component.css']
})
export class AdsPageComponent implements OnInit {

  ads : any = [] ;
  pageOfItmes : any = [];
  pageSize : number = 6 ;

  pageSlice = this.ads.slice(0 , 3)

  constructor(private adsService : AdsService) { }

  ngOnInit(): void {
    this.adsService.getAds().subscribe(data => this.ads = data);
}

pageClick(pageOfItmes : any){
this.pageOfItmes = pageOfItmes;
}

OnPageChange(event : PageEvent){
  
  const startIndex = event.pageIndex * event.pageSize;
  let endIndex = startIndex + event.pageSize;
  if(endIndex > this.ads.length){
    endIndex = this.ads.length ;
  }
  this.pageSlice = this.ads.slice(startIndex, endIndex)

}

}
