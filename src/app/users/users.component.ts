import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import { Router } from '@angular/router';
import { UserApiService } from './user-api.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  usersList$!:Observable<any[]>;


  constructor (private service : UserApiService, private router: Router){}

 ngOnInit():void{
  this.usersList$ = this.service.getUsersList();
}
routeToAdd(){
this.router.navigate(['/app-users/add-user'])   
}
}