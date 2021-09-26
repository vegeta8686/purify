/* eslint-disable @typescript-eslint/no-unused-expressions */
import { HttpClient, HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient, private router: Router) { }

  // create a method that sends the login credentials to backend
  login(data: any): Observable<any> {
    return this.httpClient.post(`user/login`, data).pipe(
      catchError(async (error) => this.handleError(error))
    );
  }

  handleError(error): void {
    console.log(error);
    switch (error.status) {
      case 401:
        console.log('UnAuthorized');
        this.router.navigateByUrl('/auth');
        break;
      case 403:
        this.router.navigateByUrl('/auth');
        break;
      default:
        retry(1),
          console.log(error);
        this.router.navigateByUrl('/auth');
        break;
    }

  }

  // create a method to that send new user data to backend
  register(data: any): Observable<any> {
    return this.httpClient.post(`user/addUser`, data).pipe(
      catchError(async (error) => this.handleError(error))
    );
  }
}
