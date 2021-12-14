import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  loginUserData = {email : '', password: ""}


  constructor(private _auth:AuthService,private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  loginUser(){
    this.toastr.info('', 'Your Log-it in!');
    this._auth.loginUser(this.loginUserData)
  }

}
