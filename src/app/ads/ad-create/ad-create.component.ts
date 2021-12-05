import { Component, OnInit } from '@angular/core';
import { AdsService } from '../ads.service';

@Component({
  selector: 'app-ad-create',
  templateUrl: './ad-create.component.html',
  styleUrls: ['./ad-create.component.css']
})
export class AdCreateComponent implements OnInit {

  states = ['Ariana', 'Béja', 'BenArous', 'Bizerte', 'Gabès', 'Gafsa', 'Jendouba', 'Kairouan', 'Kasserine', 'Kebili', 'Kef', 'Mahdia', 'Manouba', 'Medenine', 'Monastir', 'Nabeul', 'Sfax', 'Sidi Bouzid', 'Siliana', 'Sousse', 'Tataouine', 'Tozeur', 'Tunis','Zaghouan']
  priceBy = ['Day','Week','Months','Year']
  tenantType = ['Any','Family','Girls','Boys']

  selectedFile : any ;
  imagePreview! : string;

  post = {
    ville: "" ,
    prix: "" ,
    prixBy: "" ,
    adress: "" ,
    roomNumber: "" ,
    tenantType: "" ,
    picture: null ,
    description: "" ,
    phoneNumber: "" ,
    email: "" ,
    creatorId: "" ,
  }

  userId : any ;

  constructor(private adService : AdsService) { }

  ngOnInit(): void {
    this.userId = localStorage.getItem("userId") ;
  }

  onFileSelected(event : any){
    this.selectedFile = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () =>{
      this.imagePreview = reader.result as string;
    }
    reader.readAsDataURL(this.selectedFile);
  }

  savePost(){
    const formData = new  FormData();
    this.post.creatorId = this.userId;
    formData.append('post',JSON.stringify(this.post));
    formData.append('image',this.selectedFile) 
   
    this.adService.postRegister(formData).subscribe(
    
    )
  }

}
