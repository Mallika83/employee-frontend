import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent implements OnInit,OnDestroy {
 // employeeService: EmployeeService;
 // activatedRoute: ActivatedRoute = new ActivatedRoute();
  
 // id: number;
 constructor( private employeeService: EmployeeService, private router: Router){
//this.employee = employeeService.getEmployee();
this.getEmployeeFromService();
 // console.log("Empoyee Details" + JSON.stringify(this.employee));
 }
  ngOnDestroy(): void {
    this.employeeService.resetEmployee();

  }
  ngOnInit(): void {
 //   throw new Error('Method not implemented.');
 //this.employee = this.employeeService.getEmployee();
// this.getEmployeeFromService();
    console.log("Alert Employee"+this.employee);
  }
  employee: Employee = new Employee();
 
 getEmployeeFromService(): void
 {
  this.employeeService.getEmployee.subscribe(res => this.employee = res);
 }

    

    
  

updateEmployee(id: number,employee: Employee) 
{
  
  this.employeeService.updateEmployee(id,employee).subscribe(
    (res) => {this.employee = res;
    this.router.navigate([`/employees`])
  });
    
  
}
}
