import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ErrorComponent } from './error/error.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'home/employees', component: EmployeeListComponent},
  {path: 'home/add-employee', component: AddEmployeeComponent},  
  {path: 'error', component: ErrorComponent}, 
  {path: 'login',component: LoginComponent},
  {path: 'home/updateEmployee/:id', component: UpdateEmployeeComponent},
  {path: 'home/view/:id', component: EmployeeDetailsComponent},
  {path: 'home', component: HomeComponent},
   {path: '', redirectTo:'login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
