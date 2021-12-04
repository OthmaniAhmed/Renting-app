import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Advertisement } from './Advertisement';

@Injectable({
  providedIn: 'root'
})
export class AdsService {

  private url: string = "http://localhost:3000/api/ads/" ;
  private applyUrl : string = "http://localhost:3000/api/apply/";

  constructor(private http: HttpClient) { }

  getAds():Observable<Advertisement[]>{
    return this.http.get<Advertisement[]>(this.url);
  }

  getAdById(id: any):Observable<Advertisement>{
    
    return this.http.get<Advertisement>(this.url+`${id}`);
  }

  ApplyRegister(apply : any){
    return this.http.post<any>(this.applyUrl, apply)
  }

  postRegister(formData : FormData){
    return  this.http.post<any>(this.url, formData )
  }
}
