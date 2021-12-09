import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { AdsService } from '../ads.service';

@Component({
  selector: 'app-ads-page',
  templateUrl: './ads-page.component.html',
  styleUrls: ['./ads-page.component.css']
})
export class AdsPageComponent implements OnInit {

  prixByArray = ['All','Day','Week','Months','Year']
  states = ['Any','Ariana', 'Béja', 'BenArous', 'Bizerte', 'Gabès', 'Gafsa', 'Jendouba', 'Kairouan', 'Kasserine', 'Kebili', 'Kef', 'Mahdia', 'Manouba', 'Medenine', 'Monastir', 'Nabeul', 'Sfax', 'Sidi Bouzid', 'Siliana', 'Sousse', 'Tataouine', 'Tozeur', 'Tunis','Zaghouan']

  ads : any = [] ;
  pageOfItmes : any = [];
  pageSize : number = 6 ;

  pageSlice = this.ads.slice(0 , 3)

  filtredArray! : any [] ;
  stateselectedOption ='' ;
  prixByFilter = '' ;
  numberOfRoomFilter: number | null = null ;

  constructor(private adsService : AdsService) { }

  ngOnInit(): void {
    this.adsService.getAds().subscribe(data => {
      this.ads = data
      this.pageSlice = this.ads.slice(0 , 3)
      this.filtredArray = data;
    });
}


filterFun(){
  this.filtredArray = this.ads

  if((this.stateselectedOption=='' || this.stateselectedOption == 'Any' ) && ( this.numberOfRoomFilter == null) && (this.prixByFilter =='All' || this.prixByFilter =='')){
    this.filtredArray = this.ads
  }else{
    if( this.numberOfRoomFilter !=null){
      this.filtredArray  = this.filtredArray.filter((ad: { roomNumber:  number; }) => ad.roomNumber == this.numberOfRoomFilter)
    }
    if(this.stateselectedOption != '' && this.stateselectedOption!='any')
    this.filtredArray  = this.filtredArray.filter((ad: { ville: string; }) => ad.ville == this.stateselectedOption)
    if(this.prixByFilter !='All' && this.prixByFilter !=''){
      this.filtredArray  = this.filtredArray.filter((ad: { prixBy:  string; }) => ad.prixBy == this.prixByFilter )

    }
    
  }


  this.pageSlice = this.filtredArray.slice(0 , 3) ;
}

  pageClick(pageOfItmes : any){
    this.pageOfItmes = pageOfItmes;
  }
  
  OnPageChange(event : PageEvent){
    
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if(endIndex > this.filtredArray.length){
      endIndex = this.filtredArray.length ;
    }
    this.pageSlice = this.filtredArray.slice(startIndex, endIndex)
  
  }


}
