import { HttpErrorResponse, HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private router: Router) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = 'invalid-token';
    req = req.clone({ headers: req.headers.set('Authorization', 'Bearer' + token) });
    return next.handle(req).pipe(
      catchError((error) => {
        let handle = false;
        console.log(error);
        if (error instanceof HttpErrorResponse) {
          if (error.error instanceof ErrorEvent) {
            console.log('Error Event');
          } else {
            console.log(`error: ${error.status} ${error.statusText}`);
            switch (error.status) {
              case 401:
                this.router.navigate(['/auth']);
                console.log(`redirect to login`);
                handle = true;
                break;
              case 403:
                this.router.navigate(['/auth']);
                console.log(`redirect to login`);
                handle = true;
                break;
            }
          }
        } else {
          console.log('Other Errors');
        }
        if (handle) {
          console.log('return back');
          return of(error);
        } else {
          console.log('throw back to subscriber');
          return throwError(error);
        }
      })
    );
  }

  // sending invalid token will generate error
  intercept1(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = 'invalid';
    const request = req.clone({ headers: req.headers.set('Authorization', 'Bearer' + token) });
    return next.handle(request).pipe(
      catchError((error) => {
        console.log(error);
        return throwError(error.message);
      })
    );
  }

  // No errors
  intercept2(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error) => {
        console.log('error is intercept');
        console.log(error);
        return throwError(error.message);

      })
    );
  }



}
