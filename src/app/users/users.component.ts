import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import { SirganApiService } from 'src/app/sirgan-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  usersList$!:Observable<any[]>;


  constructor (private service : SirganApiService, private router: Router){}

 ngOnInit():void{
  this.usersList$ = this.service.getUsersList();
}
routeToAdd(){
this.router.navigate(['/app-users/add-user'])   
}
}