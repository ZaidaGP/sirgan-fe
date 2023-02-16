import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './components/index/index.component';
import {CanActivate,Router} from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'app-users',
    component: UsersComponent
  },
  { path: 'add-user', component: AddUserComponent },
  { path: 'index', component: IndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
