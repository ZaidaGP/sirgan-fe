import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginUserApiService {

  readonly sirganAPIUrl = 'https://localhost:7283/api';
  constructor(private http:HttpClient) { }

  //USERS
  //get the list of users on the database
  getUsersList():Observable<any[]>{
    return this.http.get<any>(this.sirganAPIUrl + '/users');
  }
}
