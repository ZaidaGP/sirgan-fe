import { Component, NgModule } from '@angular/core';
import {Observable} from 'rxjs';
import { SirganApiService } from 'src/app/sirgan-api.service';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent {
  usersList$!:Observable<any[]>;


  constructor (private service : SirganApiService){}

 ngOnInit():void{
  this.usersList$ = this.service.getUsersList();
  console.log(this.usersList$);
 } 
}
