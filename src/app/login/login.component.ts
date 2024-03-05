import { Component } from '@angular/core';
import { User } from '../user';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user: User = new User();
  authenticated: boolean = false;
  constructor(private authenticationService: AuthenticationService,private router: Router){}
  login(user: User)
  {
    this.authenticationService.authenticate(user).subscribe( (res) => 
      {
        if (res) {
          this.authenticated = true;
      } else {
          this.authenticated = false;
      }
        this.router.navigate([`home`]);
      })
  }
}
