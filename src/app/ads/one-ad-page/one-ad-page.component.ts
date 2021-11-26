import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AdsService } from '../ads.service';
import { Advertisement } from '../Advertisement';

@Component({
  selector: 'app-one-ad-page',
  templateUrl: './one-ad-page.component.html',
  styleUrls: ['./one-ad-page.component.css']
})
export class OneAdPageComponent implements OnInit {

  public singleAd?: any ;
  private _id : string | undefined ;
  private routeSub!: Subscription;

  constructor(private adsService : AdsService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this._id = params["id"] ;
    })

    this.adsService.getAdById(this._id).subscribe(
      data => {
        this.singleAd = data 
      }
    );


  }


  ngOnDestroy(){
    this.routeSub.unsubscribe();
  }

}
