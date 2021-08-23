import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { UpdateUserComponent } from './users/update-user/update-user.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path:'', component:DashboardComponent, children: [
    { path: '', component:UsersComponent},
    { path: 'users', component:UsersComponent},
    { path: 'users/add', component:AddUserComponent},
    { path: 'users/update', component:UpdateUserComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
