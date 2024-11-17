import { NgModule ,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';
import { TimeTrackerComponent } from './time-tracker/time-tracker.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminrequestsComponent } from './adminrequests/adminrequests.component';
import { AdmintimeComponent } from './admintime/admintime.component';
import { MatTableModule } from '@angular/material/table';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { UserRequestComponent } from './user-request/user-request.component';
import { UserTimeLogsComponent } from './user-time-logs/user-time-logs.component';
import { UserRequestsComponent } from './user-requests/user-requests.component';
import { TokenInterceptor } from './token.interceptor';









@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TimeTrackerComponent,
    RegisterComponent,
    AdminrequestsComponent,
    AdmintimeComponent,
    NavbarComponent,
    LandingPageComponent,
    FooterComponent,
    UserRequestComponent,
    UserTimeLogsComponent,
    UserRequestsComponent,
   
   
  
  
   

 
    
   
    
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule, 
    MatFormFieldModule ,
    MatPaginatorModule,
    NgxPaginationModule,
    MatTableModule,
    NgbModule,
    
    

    
  
    
    
  
    
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },],
  bootstrap: [AppComponent, MatPaginatorModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Add this line

})
export class AppModule { }
