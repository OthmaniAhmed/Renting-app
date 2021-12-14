import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AdsService } from '../ads.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-replys',
  templateUrl: './replys.component.html',
  styleUrls: ['./replys.component.css']
})
export class ReplysComponent implements OnInit {

  constructor(private adsServise : AdsService,private toastr: ToastrService) { }

  

  replys : any = [];
  refreshData = new BehaviorSubject<boolean>(true);
  userId = localStorage.getItem("userId");

  ads : any = [] ;

  ngOnInit(): void {
    
    this.adsServise.refreshneeded.subscribe(()=>{
      this.getAllAd();
    })
      

    this.adsServise.refreshneeded.subscribe(()=>{
      this.getAllReplys();
    });


    
    this.getAllReplys();
    this.getAllAd();
  }

  private getAllAd(){
    if(this.userId){
    this.adsServise.getAdsByCreatorId(this.userId).subscribe(data => {
      this.ads = data
    })

    }
  }

  private getAllReplys(){
    if(this.userId){
      this.adsServise.getReplys(this.userId).subscribe(data => {
        this.replys = data
        this.adsServise.setNumberOfRplys()
      })
   }
  }

  deleteReply(id : string){
    this.toastr.error('', 'This reply is deleted !');
    this.adsServise.deleteReplyById(id).subscribe();
    this.adsServise.setNumberOfRplys();
  }

  deleteAd(id : string){
    this.toastr.error('', 'This Ad is deleted !');
    this.adsServise.deleteAdById(id).subscribe();
  }

}
