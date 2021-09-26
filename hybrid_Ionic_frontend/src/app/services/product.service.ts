import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  // create a method that gets the products based on the type we pass
  getSelectedProducts(productType: string, role: string): Observable<any> {
    return this.httpClient.get(`product/getProducts/${productType}/${role}`).pipe(
      retry(1),
      catchError((error) => this.handleError(error))
    );
  }

  // handling errors
  handleError(error: any): Observable<string> {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client side error
      errorMessage = `error is ${error.message}`;
    } else {
      // server side error
      errorMessage = `Error code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
