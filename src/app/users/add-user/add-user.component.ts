import { Component, Input, OnInit } from '@angular/core';
import { SirganApiService } from 'src/app/sirgan-api.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  constructor(private service: SirganApiService) { }

  @Input() user: any;
  id: number = 0;
  name: string = "";
  lastname1: string = '';
  lastname2: string = '';
  birthday : Date = new Date();
  province: string = '';
  canton: string = '';
  address: string = '';
  email: string = '';
  phoneNumber: string = '';
  password: string = '';
  status: number = 0;
  role: string = '';
  registrationDate : Date = new Date();

  // ngOnInit(): void {
  //   this.id = this.user.id;
  //   this.name = this.user.name;
  //   this.lastname1 = this.user.lastname1;
  //   this.lastname2 = this.user.lastname1;
  //   this.birthday = this.user.birthday;
  //   this.province = this.user.province;
  //   this.canton = this.user.canton;
  //   this.address = this.user.address;
  //   this.email = this.user.email;
  //   this.phoneNumber = this.user.phoneNumber;
  //   this.password = this.user.password;
  //   this.status = this.user.status;
  //   this.role = this.user.role;
  //   this.registrationDate = this.user.registrationDate;
  // }

  addUser() {
    var user = {
      name: this.name,
      lastname1 : this.lastname1,
      lastname2 : this.lastname2,
      birthday: this.birthday,
      province : this.province,
      canton : this.canton,
      address : this.address,
      email : this.email,
      phoneNumber : this.phoneNumber,
      password : this.password,
      status : this.status,
      role : this.role, 
      registrationDate: this.registrationDate,
    }
    this.service.addUser(user).subscribe(res => {
      // var showAddSuccess = document.getElementById('add-success-alert');
      // if(showAddSuccess) {
      //   showAddSuccess.style.display = "block";
      // }
      // setTimeout(function() {
      //   if(showAddSuccess) {
      //     showAddSuccess.style.display = "none"
      //   }
      // }, 4000);
    })
  }
}