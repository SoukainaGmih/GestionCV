import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, GuardResult, MaybeAsync, Route, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../Auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  authservice: AuthService = inject(AuthService)
  router: Router = inject(Router)

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    boolean | Observable<boolean> | Promise<boolean> {
    console.log(this.authservice.isAuthenticatedCampany())

    if (this.authservice.isAuthenticatedCampany()) {
      
      return true;
    }
    else {
      this.router.navigate(['/login']);
      return false;
    }
  }

  constructor() { }


}
