import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Employee } from './employee';
import { HttpResponse } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  resetEmployee() {
   // this.employee = null;
  }
  private baseURL = "http://localhost:8080/api/v1";
 employee = new BehaviorSubject<any>(null);
 
  constructor(private httpClient:HttpClient) {


   }
   getEmployeeList():Observable<Employee[]>
   {
       
   return  this.httpClient.get<Employee[]>(`${this.baseURL}/employees`);
   
   }

  /* addEmployee( employee: Employee): Observable<Employee>
   {
    return this.httpClient.post<Employee>((`${this.baseURL}/addEmploye`),employee)
    
   }*/
   addEmployee( employee: Employee): Observable<Employee>
   {
    return this.httpClient.post<Employee>((`${this.baseURL}/addEmployee`),employee);
    
       }
       getEmployeemethod(id: number): Observable <Employee>
       {
        console.log("ID: "+id);
        return this.httpClient.get<Employee>(`${this.baseURL}/findEmployee/${id}`);

       }
       updateEmployee(id: number,employee: Employee): Observable<Employee>
       {
        console.log("Update Employee "+JSON.stringify(employee));
        return this.httpClient.post<Employee>((`${this.baseURL}/updateEmployee/${id}`),employee)
                  
        }

        setEmployee(employee: Employee): void
        {
          console.log("Set Employee "+JSON.stringify(employee));

          this.employee.next(employee)  ;
        }
        getEmployee = this.employee.asObservable();

        deleteEmployee(id: number): Observable<any>{
          return this.httpClient.delete(`${this.baseURL}/deleteEmployee/${id}`)
        }
       
      }  

