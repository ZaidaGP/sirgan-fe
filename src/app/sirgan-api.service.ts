import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SirganApiService {

  readonly sirganAPIUrl = 'https://localhost:7283/api';
  constructor(private http:HttpClient) { }

  //USERS
  //get the list of users on the database
  getFarmsList():Observable<any[]>{
    return this.http.get<any>(this.sirganAPIUrl + '/Farm');
  }

  //add user 
  addFarm(data:any){
    return this.http.post(this.sirganAPIUrl + '/Farm',data);
  }

  //update user
  updateUser(id:number, data:any){
    return this.http.put(this.sirganAPIUrl + `/users/${id}`,data);
  }

  //disable user
  disableUser(id:number, data:any){
    return this.http.put(this.sirganAPIUrl + `/users/disable/${id}`,data);
  }

  //able user
  enableUser(id:number, data:any){
    return this.http.put(this.sirganAPIUrl + `/users/enable/${id}`,data);
  }

}
