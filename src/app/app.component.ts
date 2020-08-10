import { Component } from '@angular/core';
import { AuthenticationQuery } from './core/state/authentication/authentication.query';
import { AuthenticationService } from './core/state/authentication/authentication.service';
import { AuthenticationActions } from './core/state/authentication/authentication.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  AUTH_ACTIONS = AuthenticationActions;
  constructor(
    public authQuery: AuthenticationQuery,
    public authService: AuthenticationService
  ) {}
}
