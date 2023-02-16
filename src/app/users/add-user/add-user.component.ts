import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { UserApiService } from '../user-api.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent  {

  myForm: FormGroup;
  constructor(private service: UserApiService, public fb: FormBuilder) { 
    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(30)]],
      lastname1: ['', [Validators.required, Validators.maxLength(30)]],
      lastname2: ['', [Validators.required, Validators.maxLength(30)]],
      birthday: ['', [Validators.required]],
      province: ['', [Validators.required]],
      canton: ['', [Validators.required, Validators.maxLength(30)]],
      address: ['', [Validators.required, Validators.maxLength(300)]],
      phoneNumber: ['', [Validators.required, Validators.maxLength(15)]],
      email: ['', [Validators.required, Validators.maxLength(40), Validators.email,]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]],
      status: ['', [Validators.required]],
      role: ['', [Validators.required]],
      registrationDate: ['', ],
    });
  }

  ngOnInit() { }

  addUser() {    
    this.myForm.value.registrationDate = new Date();
    this.service.addUser(this.myForm.value).subscribe(res => {
      console.log(this.myForm.value);
    })
  }
}