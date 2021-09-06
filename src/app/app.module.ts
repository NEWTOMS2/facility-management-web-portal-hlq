import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { SharedModule } from './shared/shared.module';
import { ResetPwComponent } from './reset-pw/reset-pw.component';

const routes: Routes = [
  { path:'', pathMatch: 'full', redirectTo: '/login'},
  { path:'login', component:LoginComponent},
  { path:'reset-pw', component:ResetPwComponent},
  { path:'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(x => x.DashboardModule) },
  { path:'**', pathMatch: 'full', redirectTo: '/login'}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ResetPwComponent
  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {
      useHash: true,
    }),
    SharedModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class AppRoutingModule { }
