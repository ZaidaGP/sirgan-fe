import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly sirganAPIUrl = 'https://localhost:7283/api';
  constructor(private http:HttpClient) { }

  loginUser(loginInfo : Array<string>){
    return this.http.post(this.sirganAPIUrl + '/Users/LoginUser',{
      Email : loginInfo[0],
      Password : loginInfo[1]
    });
  }

}
