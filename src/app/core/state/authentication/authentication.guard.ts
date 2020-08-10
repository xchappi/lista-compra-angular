import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  UrlTree,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { AuthenticationQuery } from './authentication.query';

@Injectable({ providedIn: 'root' })
export class AuthenticationGuard implements CanActivate {
  constructor(private router: Router, private authQuery: AuthenticationQuery) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> {
    return this.authQuery.isLoggedIn$.pipe(
      first(),
      map((isLoggedIn) => {
        if (isLoggedIn) {
          return true;
        } else {
          return this.router.parseUrl('login');
        }
      })
    );
  }
}
