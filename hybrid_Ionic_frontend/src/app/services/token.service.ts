/* eslint-disable @typescript-eslint/member-ordering */
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }
  token = 'app-token';

  // creating a new token
  saveToken(content: any): void {
    sessionStorage.setItem(this.token, JSON.stringify(content));
  }

  // retreving a token
  retreiveToken(): string {
    return sessionStorage.getItem(this.token);
  }

  // remove the token
  removeToken(): void {
    sessionStorage.removeItem(this.token);
  }

  // clear the session
  clearSession(): void {
    sessionStorage.clear();
  }
}
