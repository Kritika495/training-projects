import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDetails } from '../models/user-details';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient, private router: Router) { }
  authenticateUser(user:UserDetails){
  this.http.post("http://localhost:5298/api/Account/Login", user).subscribe(res=>
  
  {console.log(res)}, err=>{console.log(err)});
  }
  
}
