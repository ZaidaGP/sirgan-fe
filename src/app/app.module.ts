import {HttpClientModule} from '@angular/common/http'

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components//nav-bar/nav-bar.component';

import { SirganApiService } from './sirgan-api.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { HomeModule } from './home/home.module';
import { UsersModule } from './users/users.module';
import { LoginComponent } from './components//login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


/******************************************************************
 * Load `$localize` - used if i18n tags appear in Angular templates.
 */
import '@angular/localize/init';
import { SliderComponent } from './components/slider/slider.component';
import { IndexComponent } from './components/index/index.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent, 
    LoginComponent, RegisterComponent, IndexComponent,
      
  
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    HomeModule,
    UsersModule,
    NgbModule,  
    SliderComponent
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
