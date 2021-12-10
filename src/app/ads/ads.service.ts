import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Advertisement } from './Advertisement';

@Injectable({
  providedIn: 'root'
})
export class AdsService {

  userId = localStorage.getItem("userId");

  numberOfReplys!: number ;

  private url: string = "http://localhost:3000/api/ads/" ;
  private applyUrl : string = "http://localhost:3000/api/apply/";

  private refreshNeeded = new Subject<void>();

  constructor(private http: HttpClient) { }

  get refreshneeded(){
    this.setNumberOfRplys()
   return this.refreshNeeded ;
  }

  getAds():Observable<Advertisement[]>{
    return this.http.get<Advertisement[]>(this.url);
  }

  getAdById(id: any):Observable<Advertisement>{
    
    return this.http.get<Advertisement>(this.url+`${id}`);
  }

  postRegister(formData : FormData){
    return  this.http.post<any>(this.url, formData )
  }

  ApplyRegister(apply : any){
    return this.http.post<any>(this.applyUrl, apply)
  }

  getReplys(id : string){
    return this.http.get<any>(this.applyUrl+`${id}`)
  }

  deleteReplyById(id : string){
    return this.http.delete<any>(this.applyUrl +`${id}`)
    .pipe(
      tap(()=>{
        this.refreshNeeded.next();  
      })
    )
  }

  setNumberOfRplys(){
    if(this.userId){
      this.getReplys(this.userId).subscribe(data => {
        this.numberOfReplys = data.length
      })
   }  
  }
  
  getNumberOfRplys(){
    return this.numberOfReplys;
  }

}
