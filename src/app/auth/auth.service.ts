import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = "http://localhost:3000/api/auth/register" ;
  private _loginUrl = "http://localhost:3000/api/auth/" ;

  private isAuthenticated = false ;
  private userName: string | undefined;

  constructor(private http: HttpClient,private router :Router) { }

  registerUser(user: any){
    return  this.http.post<any>(this._registerUrl, user )
  }

  loginUser(user : any){
    return this.http.post<any>(this._loginUrl,user).subscribe(
      res => {
        this.isAuthenticated = true ;
        localStorage.setItem('token',res.token);
        localStorage.setItem('username',res.userName);
        this.userName = res.userName ;
        
        console.log(this.userName+"55"+this.isAuthenticated)
        this.router.navigate(['']);
      }
    )
  }
  getisAuth(){
        return this.isAuthenticated;
}

  getUserName(){
  return this.userName;
}

logout(){
  localStorage.clear();
}

}
