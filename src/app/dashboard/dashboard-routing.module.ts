import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessControlComponent } from './access-control/access-control.component';
import { AddAssetComponent } from './assets/add-asset/add-asset.component';
import { AssetsComponent } from './assets/assets.component';
import { UpdateAssetComponent } from './assets/update-asset/update-asset.component';
import { BiComponent } from './bi/bi.component';
import { ClientsComponent } from './clients/clients.component';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { AddTaskComponent } from './tasks/add-task/add-task.component';
import { TasksComponent } from './tasks/tasks.component';
import { UpdateTaskComponent } from './tasks/update-task/update-task.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { UpdateUserComponent } from './users/update-user/update-user.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path:'', component:DashboardComponent, children: [
    { path: '', component:HomeComponent},
    { path: 'users', component:UsersComponent},
    { path: 'users/add', component:AddUserComponent},
    { path: 'users/update', component:UpdateUserComponent},
    { path: 'tasks', component:TasksComponent},
    { path: 'tasks/add', component:AddTaskComponent},
    { path: 'tasks/update', component:UpdateTaskComponent},
    { path: 'assets', component:AssetsComponent},
    { path: 'assets/add', component:AddAssetComponent},
    { path: 'assets/update', component:UpdateAssetComponent},
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
