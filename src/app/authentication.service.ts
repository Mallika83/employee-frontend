import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  

  constructor(private httpClient: HttpClient,private router: Router) { }
  private baseURL = "http://localhost:8080/api/v1";
  authenticate(user: User):Observable<any>
  {
   const headers = new HttpHeaders(user ? {
      authorization : 'Basic ' + btoa(user.userName + ':' + user.password)
  } : {});
  return this.httpClient.get<User>((`${this.baseURL}/login`),{headers}).pipe(map(
    res => {
      sessionStorage.setItem('username',user.userName);
      const authString = 'Basic ' + btoa(user.userName + ':' + user.password);
      sessionStorage.setItem('basicauth',authString);
      return res;
    }
  ));

  }
  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }
}
