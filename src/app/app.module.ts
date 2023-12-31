import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import { LoginComponent } from './login/login.component';
import { B2bComponent } from './b2b/b2b.component';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { CovidreportsComponent } from './covidreports/covidreports.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
// import { LoginService } from './services/user-data.service';
import { AuthGuardService } from './services/auth-guard.service';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [AppComponent, LoginComponent, B2bComponent, DashboardComponent, UserprofileComponent, CovidreportsComponent, ChangepasswordComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, MatIconModule, MatButtonModule, MatInputModule, NgxSpinnerModule ],
  providers: [AuthGuardService ],
  bootstrap: [AppComponent],
})
export class AppModule {}
