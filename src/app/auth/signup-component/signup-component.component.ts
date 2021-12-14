import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup-component',
  templateUrl: './signup-component.component.html',
  styleUrls: ['./signup-component.component.css']
})
export class SignupComponentComponent implements OnInit {

  registerUserData = { name : '' ,email: '' , password : ''}

  constructor(private _auth : AuthService,private router : Router,private toastr: ToastrService) { }


  ngOnInit(): void {
  }

  registerUser(){
    this._auth.registerUser(this.registerUserData)
    .subscribe(
      res => {
        this.router.navigate(['/login'])
        this.toastr.success('now you can login to your account', 'Account saved !');
      }
    )
  }
}
