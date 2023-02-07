import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { UsersRoutingModule } from './users-routing.module';

import { UsersComponent } from './users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ShowUserComponent } from './show-user/show-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { DisableUserComponent } from './disable-user/disable-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';

@NgModule({
  declarations: [
    UsersComponent,
    AddUserComponent,
    ShowUserComponent,
    EditUserComponent,
    DisableUserComponent,
    UpdateUserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    UsersRoutingModule,
  ]
})
export class UsersModule { }
