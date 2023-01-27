import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import { SirganApiService } from 'src/app/sirgan-api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  farmAdd$!:Observable<any[]>;
  constructor (private service : SirganApiService){}
  ngOnInit():void{
    this.service.addFarm(this.farmAdd$);
  }
}
