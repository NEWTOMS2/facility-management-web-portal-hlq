import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessControlComponent } from './access-control/access-control.component';
import { AssetsComponent } from './assets/assets.component';
import { BiComponent } from './bi/bi.component';
import { ClientsComponent } from './clients/clients.component';
import { DashboardComponent } from './dashboard.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { TasksComponent } from './tasks/tasks.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { UpdateUserComponent } from './users/update-user/update-user.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path:'', component:DashboardComponent, children: [
    { path: '', component:UsersComponent},
    { path: 'users', component:UsersComponent},
    { path: 'users/add', component:AddUserComponent},
    { path: 'users/update', component:UpdateUserComponent},
    { path: 'tasks', component:TasksComponent},
    { path: 'assets', component:AssetsComponent},
    { path: 'access-control', component:AccessControlComponent},
    { path: 'clients', component:ClientsComponent},
    { path: 'maintenance', component:MaintenanceComponent},
    { path: 'bi', component:BiComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
