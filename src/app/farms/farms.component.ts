import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import { SirganApiService } from 'src/app/sirgan-api.service';

@Component({
  selector: 'app-farms',
  templateUrl: './farms.component.html',
  styleUrls: ['./farms.component.css']
})
export class FarmsComponent {

  farmsList$!:Observable<any[]>;

  constructor (private service : SirganApiService){}
  ngOnInit():void{
    this.farmsList$ = this.service.getFarmsList();
  }
}
