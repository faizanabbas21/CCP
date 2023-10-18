import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { B2bComponent } from './b2b/b2b.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CovidreportsComponent } from './covidreports/covidreports.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { AuthGuardService } from './services/auth-guard.service';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'login',
    component: LoginComponent,


  },
  {
    path: 'b2b',
    component: B2bComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: 'changepassword',
        component: ChangepasswordComponent,
      },
      {
        path: 'userprofile',
        component: UserprofileComponent,

      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'covidreports',
        component: CovidreportsComponent,
      },

    ],
  },

];

@NgModule({
  declarations:[],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
