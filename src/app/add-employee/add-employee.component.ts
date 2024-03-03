import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})

export class AddEmployeeComponent implements OnInit{
  employee: Employee = new Employee();
  error: Error = new Error();
  router: Router = new Router();
  constructor(private employeeService:EmployeeService) {}
  ngOnInit(): void {
    //employee : {};
  }
addEmployee(updatedEmployee: Employee){
console.log("first name "+updatedEmployee.firstName);
console.log("Last name "+updatedEmployee.lastName);
console.log("Email ID "+updatedEmployee.emailId);
  this.employeeService.addEmployee(updatedEmployee).subscribe((data) =>
  {this.employee = data;
  this.router.navigate([`/employees`])},
  error =>
  {
    this.error = error.body;
    console.log("Error "+error.message);
    this.router.navigate([`/error`]);
  })  
}

}
