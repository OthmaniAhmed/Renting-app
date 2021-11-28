import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AdsService } from '../ads.service';

@Component({
  selector: 'app-apply-page',
  templateUrl: './apply-page.component.html',
  styleUrls: ['./apply-page.component.css']
})
export class ApplyPageComponent implements OnInit {


  applyData = {
    tenantName : '', 
    phoneNumber: "",
    tenantEmail : '',
    tenantAddress : '',
    tenantGender : '',
    tenantMaritalStatus : '',
    tenantOccupationStatus : '',
    comment : '',
    creatorId : '',
  }

  private routeSub!: Subscription;

  constructor(private route :ActivatedRoute , private adsServices : AdsService,private router :Router) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params =>{
      this.applyData.creatorId = params["id"] ;
    })
  }

  applyToTheAd(){
    this.adsServices.ApplyRegister(this.applyData)
    .subscribe(
      res => this.router.navigate(["/ads"]) 
    )

  }

}
