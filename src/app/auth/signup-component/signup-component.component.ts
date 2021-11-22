import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup-component',
  templateUrl: './signup-component.component.html',
  styleUrls: ['./signup-component.component.css']
})
export class SignupComponentComponent implements OnInit {

  registerUserData = { name : '' ,email: '' , password : ''}

  constructor(private _auth : AuthService,private router : Router) { }


  ngOnInit(): void {
  }

  registerUser(){
    this._auth.registerUser(this.registerUserData)
    .subscribe(
      res => this.router.navigate(['/login'])
    )
  }
}
