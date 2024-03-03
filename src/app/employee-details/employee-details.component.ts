import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css'
})
export class EmployeeDetailsComponent implements OnInit {
  id: number;
employee: Employee = new Employee();
constructor(private employeeService: EmployeeService, private route: ActivatedRoute){}
ngOnInit(): void {
this.id =  this.route.snapshot.params['id'];
this.employeeService.getEmployeemethod(this.id).subscribe(res => this.employee = res);
}

}
