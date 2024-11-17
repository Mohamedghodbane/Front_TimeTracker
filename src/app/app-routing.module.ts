import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
import { TimeTrackerComponent } from './time-tracker/time-tracker.component';
import { RegisterComponent } from './register/register.component';
import { AdminrequestsComponent } from './adminrequests/adminrequests.component';
import { AdmintimeComponent } from './admintime/admintime.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserRequestComponent } from './user-request/user-request.component';
import { UserRequestsComponent } from './user-requests/user-requests.component';
import { UserTimeLogsComponent } from './user-time-logs/user-time-logs.component';




const routes: Routes = [
 
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  {
    path: '',
    component: NavbarComponent},

      { path: 'time-tracker', component: TimeTrackerComponent },
      { path: 'adminreq', component: AdminrequestsComponent },
      { path: 'admintime', component: AdmintimeComponent },
      { path: 'UserRequest', component: UserRequestComponent }, 
      { path: 'userrequests', component: UserRequestsComponent },
      { path: 'usertimelogs', component: UserTimeLogsComponent },
    
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes),MatDialogModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
