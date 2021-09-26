import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private tokenService: TokenService) { }
  canActivate() {
    const token = JSON.parse(this.tokenService.retreiveToken());
    if (!token) {
      this.router.navigateByUrl('/auth');
      return false;
    }
    this.router.navigateByUrl('/home');
    return true;
  }

}
