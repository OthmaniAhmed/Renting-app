import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Advertisement } from './Advertisement';

@Injectable({
  providedIn: 'root'
})
export class AdsService {

  private url: string = "http://localhost:3000/api/ads/" ;

  constructor(private http: HttpClient) { }

  getAds():Observable<Advertisement[]>{
    return this.http.get<Advertisement[]>(this.url);
  }
}