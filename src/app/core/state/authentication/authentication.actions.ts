import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationQuery } from './authentication.query';
import { Subscription } from 'rxjs';
import { AuthenticationService } from './authentication.service';

export enum AuthenticationActions {
  LOGIN_SUCCESS = '[Auth] LOGIN_SUCCESS',
  LOGOUT = '[Auth] LOGOUT',
}

@Injectable({ providedIn: 'root' })
export class AuthenticationActionsHandler implements OnDestroy {
  private actionSubscription: Subscription;

  constructor(
    query: AuthenticationQuery,
    router: Router,
    authService: AuthenticationService
  ) {
    this.actionSubscription = query.action$.subscribe((action) => {
      switch (action) {
        case AuthenticationActions.LOGIN_SUCCESS:
          this.loginSuccessAction(router, authService);
          break;
        case AuthenticationActions.LOGOUT:
          this.logoutAction(router, authService);
          break;
      }
    });
  }

  private loginSuccessAction(
    router: Router,
    authService: AuthenticationService
  ) {
    authService.updateError(null);
    router.navigate(['compra']);
  }

  private logoutAction(router: Router, authService: AuthenticationService) {
    authService.logout().then((success) => {
      router.navigate(['login']);
    });
  }

  ngOnDestroy() {
    this.handleUnSubscriptions();
  }

  private handleUnSubscriptions() {
    this.actionSubscription.unsubscribe();
  }
}
