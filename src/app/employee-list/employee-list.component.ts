import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { subscribeOn } from 'rxjs';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  Employees:Employee[];
  employee: Employee = new Employee();
  router: Router = new Router();
  constructor(private employeeService:EmployeeService) {}

  
ngOnInit(): void
{
  this.getEmployeeList();
  
}
private getEmployeeList()
{
 this. employeeService.getEmployeeList().subscribe(data => this.Employees=data);
  console.log("Employee List "+JSON.stringify(this.Employees));

  }
  getEmployeeMethod(id: number)
{
  console.log("ID in Employee List "+id);
  this.employeeService.getEmployeemethod(id).subscribe(res =>
    {
      this.employee = res;
      this.employeeService.setEmployee(this.employee);
    } )
  console.log("Get Employee method "+this.employee.firstName);
  
  console.log("Get Employee "+ JSON.stringify(this.employee));
  this.router.navigate(['home/updateEmployee',id]);
}

deleteEmployee(id: number)
{
  this.employeeService.deleteEmployee(id).subscribe(res => {
    this.employee =res;
  this.getEmployeeList();
  });
  this.router.navigate([`home/employees`]);

}
view(id: number)
{
  this.employeeService.getEmployeemethod(id).subscribe(res =>
    {
      this.router.navigate(['home/view',id]);
    })
}
}

