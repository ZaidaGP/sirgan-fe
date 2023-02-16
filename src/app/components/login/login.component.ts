import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public user: any;
  constructor (private loginAuth : AuthService,private router: Router){}



    loginForm = new FormGroup({
      email: new FormControl("",[Validators.required,Validators.email]),
      password: new FormControl("",[Validators.required, Validators.minLength(8), Validators.maxLength(15)]),
    });

    isUserValid : boolean = false;
    loginSubmited(){
     
      this.loginAuth.loginUser([this.loginForm.value.email!, this.loginForm.value.password!]).
      subscribe(res => {
        this.user = res;
        console.log(this.user.role);
        if(res){
          this.isUserValid = true;
          alert('Login');
          this.router.navigate(['index']);
        }else{          
          this.isUserValid = false;
          alert('Not Login');
        }
      });
    }
}
