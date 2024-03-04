import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LoginInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if(sessionStorage.getItem('username') && sessionStorage.getItem('basicauth'))
    {
      const basicauth = sessionStorage.getItem('basicauth');
      const modifiedRequest = request.clone({
        setHeaders: {Authorization: `${basicauth}`}
           })
           console.log('Outgoing HTTP request', request);
           return next.handle(modifiedRequest);
           
    }
   else{
    console.log('Outgoing HTTP request', request);
    return next.handle(request);
   }
    
    
  }
}