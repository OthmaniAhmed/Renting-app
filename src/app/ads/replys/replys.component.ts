import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AdsService } from '../ads.service';


@Component({
  selector: 'app-replys',
  templateUrl: './replys.component.html',
  styleUrls: ['./replys.component.css']
})
export class ReplysComponent implements OnInit {

  constructor(private adsServise : AdsService) { }

  

  replys : any = [];
  refreshData = new BehaviorSubject<boolean>(true);
  userId = localStorage.getItem("userId");


  ngOnInit(): void {
    
    this.adsServise.refreshneeded.subscribe(()=>{
      this.getAllReplys();
    });
    
    this.getAllReplys();
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
    this.adsServise.deleteReplyById(id).subscribe();
    this.adsServise.setNumberOfRplys()

  }

}
