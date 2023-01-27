import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { ShowUserComponent } from './users/show-user/show-user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { DisableUserComponent } from './users/disable-user/disable-user.component';
// import 'bootstrap/dist/css/bootstrap.min.css';


import { SirganApiService } from './sirgan-api.service';
import { HomeComponent } from './home/home.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    UsersComponent,
    AddUserComponent,
    ShowUserComponent,
    EditUserComponent,
    DisableUserComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
