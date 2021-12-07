import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos'

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})
export class SecondPageComponent implements OnInit {

  constructor(private route : Router) { }

  isAuthenticated = false;

  ngOnInit(): void {
    AOS.init();

    if(localStorage.getItem('token')){
      this.isAuthenticated = true;
    }
  }

  redirect(){
    if(this.isAuthenticated){
      this.route.navigate(['/create']) 
    }
    else{
      this.route.navigate(['/login'])
    }
  }
}
