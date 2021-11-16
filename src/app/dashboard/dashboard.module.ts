import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { UsersComponent } from './users/users.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { UpdateUserComponent } from './users/update-user/update-user.component';
import { TasksComponent } from './tasks/tasks.component';
import { AssetsComponent } from './assets/assets.component';
import { AccessControlComponent } from './access-control/access-control.component';
import { ClientsComponent } from './clients/clients.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { BiComponent } from './bi/bi.component';
import { DialogComponent } from './dialog/dialog.component';
import { HomeComponent } from './home/home.component';
import { AddTaskComponent } from './tasks/add-task/add-task.component';
import { UpdateTaskComponent } from './tasks/update-task/update-task.component';
import { AddAssetComponent } from './assets/add-asset/add-asset.component';
import { UpdateAssetComponent } from './assets/update-asset/update-asset.component';

@NgModule({
  declarations: [
    DashboardComponent,
    UsersComponent,
    SidenavComponent,
    AddUserComponent,
    UpdateUserComponent,
    TasksComponent,
    AssetsComponent,
    AccessControlComponent,
    ClientsComponent,
    MaintenanceComponent,
    BiComponent,
    DialogComponent,
    HomeComponent,
    AddTaskComponent,
    UpdateTaskComponent,
    AddAssetComponent,
    UpdateAssetComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
