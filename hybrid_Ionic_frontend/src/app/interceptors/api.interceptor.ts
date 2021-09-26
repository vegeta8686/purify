import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const request = req.clone({ url: `${environment.apiUrl}/${req.url}` });
    return next.handle(request);
  }

  //   return next.handle(request).pipe(catchError(err => {
  //     if ([401, 403].indexOf(err.status) !== -1) {
  //         // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
  //         this.authenticationService.logout();
  //         location.reload(true);
  //     }

  //     const error = err.error.message || err.statusText;
  //     return throwError(error);
  // }))
}
