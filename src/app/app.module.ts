import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './error/error.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeService } from './employee.service';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { LoginComponent } from './login/login.component';
import { LoginInterceptor } from './login.interceptor';
import { AuthenticationService } from './authentication.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    AddEmployeeComponent,
    ErrorComponent,
    UpdateEmployeeComponent,
    EmployeeDetailsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [EmployeeService, AuthenticationService, {provide: HTTP_INTERCEPTORS, useClass: LoginInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
