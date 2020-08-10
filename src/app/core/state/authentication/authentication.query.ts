import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import {
  AuthenticationStore,
  AuthenticationState,
} from './authentication.store';
import { state } from '@angular/animations';

@Injectable({ providedIn: 'root' })
export class AuthenticationQuery extends Query<AuthenticationState> {
  isLoading$ = this.selectLoading();
  isLoggedIn$ = this.select((state) => !!state.uid);
  action$ = this.select('action');
  constructor(protected store: AuthenticationStore) {
    super(store);
  }
}
