import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { AdsService } from '../ads.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-one-ad-page',
  templateUrl: './one-ad-page.component.html',
  styleUrls: ['./one-ad-page.component.css']
})
export class OneAdPageComponent implements OnInit {

  public singleAd?: any ;
  public userDetails? : any;
  private _id! : string ;
  private routeSub!: Subscription;

  private userId = "" ;
   imagePath : any;

  constructor(private adsService : AdsService, private route : ActivatedRoute,private userService : AuthService,private router :Router,private _sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this._id = params["id"] ;
    })

    this.adsService.getAdById(this._id).subscribe(
      data => {
        this.singleAd = data ;    
         this.imagePath =this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
         + data.picture.data);

        
        this.userId = this.singleAd.creatorId ;
        this.userService.getUserById(this.userId).subscribe(
          data =>{
            this.userDetails = data ;
     } 
        )
      }
    );

  }

  applyRedirection(){
    this.router.navigate(["apply",this._id])
  }


  ngOnDestroy(){
    this.routeSub.unsubscribe();
  }

}
