import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthorizationService } from './';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authorizationService: AuthorizationService, private router: Router) { };

  canActivate() {
    console.log('AuthGuard#canActivate called');
    let result = this.authorizationService.isAuthenticated();
    if (!result) {
      this.router.navigate(['/login']);
    }
    return result;
  }
}