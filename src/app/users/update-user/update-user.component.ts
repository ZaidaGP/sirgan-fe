import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserApiService } from '../user-api.service';


@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css'],
})
export class UpdateUserComponent {
  public user: any;
  public id: number = 0;
  public birthday: any;

  myForm = new FormGroup({
    name: new FormControl(''),
    lastname1: new FormControl(''),
    lastname2: new FormControl(''),
    birthday: new FormControl(''),
    province: new FormControl(''),
    canton: new FormControl(''),
    address: new FormControl(''),
    phoneNumber: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    status: new FormControl(''),
    role: new FormControl(''),
  });
  constructor(
    // public user : User,
    public fb: FormBuilder,
    private service: UserApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getUser();
  }

  //method to get the data from the user that is gonna be updated.
  public getUser() {
    this.activatedRoute.params.subscribe((e) => {
      this.id = e['id'];
      if (this.id) {
        this.service.getUser(this.id).subscribe((usr) => {
          this.user = usr;
          this.initializeForm();
        });
      }
    });
  }
  
  initializeForm(){
    // First we set the Date format to the birthdat string value with a date format value
    // this.birthday = new Date(this.user['birthday']).toLocaleDateString('en-CA');
    this.birthday = new Date(this.user['birthday']);
    console.log(this.birthday);

    this.myForm = new FormGroup({
      name: new FormControl(this.user['name'].trim(), [
        Validators.required,
        Validators.maxLength(30),
      ]),
      lastname1: new FormControl(this.user['lastName1'].trim(), [Validators.required, Validators.maxLength(30)]),
      lastname2: new FormControl(this.user['lastName2'].trim(),[Validators.required, Validators.maxLength(30)]),
      birthday: new FormControl('', [
        Validators.required,
        Validators.maxLength(30),
      ]),
      province: new FormControl(this.user['province'].trim(), [
        Validators.required,
        Validators.maxLength(30),
      ]),
      canton: new FormControl(this.user['canton'], [
        Validators.required,
        Validators.maxLength(30),
      ]),
      address: new FormControl(this.user['address'].trim(), [
        Validators.required,
        Validators.maxLength(30),
      ]),
      phoneNumber: new FormControl(this.user['phoneNumber'].trim(), [
        Validators.required,
        Validators.maxLength(30),
      ]),
      email: new FormControl(this.user['email'].trim(), [
        Validators.required,
        Validators.maxLength(30),
        Validators.email,
      ]),
      password: new FormControl(this.user['password'].trim(), [
        Validators.required,
        Validators.maxLength(30),
      ]),
      status: new FormControl(this.user['status'], [
        Validators.required,
        Validators.maxLength(30),
      ]),
      role: new FormControl(this.user['role'].trim(), [
        Validators.required,
        Validators.maxLength(30),
      ]),
    });
  }
  updateUser() {
    // this.myForm.value.registrationDate = new Date();
    this.service.addUser(this.myForm.value).subscribe((res) => {
      console.log(this.myForm.value);
    });
  }
}
