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

  monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
  ];

  public singleAd?: any ;
  public userDetails? : any;
  private _id! : string ;
  private routeSub!: Subscription;
  private userId = "" ;

  comment = {
    commenterName :  "",
    dateOfCreation : "",
    theComment : "",
  }


  constructor(private adsService : AdsService, private route : ActivatedRoute,private userService : AuthService,private router :Router,private _sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this._id = params["id"] ;
    })

    

    this.adsService.refreshneeded.subscribe(()=>{
      this.getAd();
    })

    this.getAd();
  }

  private getAd(){
    this.adsService.getAdById(this._id).subscribe(
      data => {
        this.singleAd = data ;    
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
    this.router.navigate(["apply",this.userDetails.id])
  }


  ngOnDestroy(){
    this.routeSub.unsubscribe();
  }


  addComment(){
    var dateObj = new Date();
    var month = dateObj.getUTCMonth() ; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
    this.comment.dateOfCreation =  this.monthNames[month] + " " + day + "," + year  ;
    const formData = new FormData;
    formData.append('id', this._id)
    formData.append('comment',JSON.stringify(this.comment));
    this.adsService.addComment(formData).subscribe();
    this.comment = {
      commenterName :  "",
      dateOfCreation : "",
      theComment : "",
    }
  }

}
