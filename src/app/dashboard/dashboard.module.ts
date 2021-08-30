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

@NgModule({
  declarations: [
    DashboardComponent,
    UsersComponent,
    SidenavComponent,
    AddUserComponent,
    UpdateUserComponent,
    TasksComponent,
    AssetsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
