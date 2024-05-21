import { Injectable, inject } from '@angular/core';
import { AuthService } from '../Auth/auth.service';
import { ActivatedRouteSnapshot, Route, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardCaService {

  constructor() { }

  authservice: AuthService = inject(AuthService)
  router: Router = inject(Router)

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    boolean | Observable<boolean> | Promise<boolean> {
    if (this.authservice.isAuthenticatedCandidat()) {
      //  this.router.navigate(['/Company']);
      return true;
    }
    else {
      this.router.navigate(['/login']);
      return false;
    }
  }




}
