import {HttpClientModule} from '@angular/common/http'

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { SirganApiService } from './sirgan-api.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { HomeModule } from './home/home.module';
import { UsersModule } from './users/users.module';
// import { NavBarModule } from './nav-bar/nav-bar.module';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,   
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    HomeModule,
    UsersModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
