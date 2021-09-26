import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { TokenService } from '../services/token.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private tokenService: TokenService) { }
  canActivate() {
    const token = JSON.parse(this.tokenService.retreiveToken());
    if (token.role === 'SUPER ADMIN') { return true; }
    return false;
  }

}
