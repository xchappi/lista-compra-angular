import { Injectable } from '@angular/core';
import { StoreConfig, Store } from '@datorama/akita';
import { FireAuthState } from 'akita-ng-fire';
import { DbErrors } from '../../models/DbError.enum';
import { CustomErrors } from '../../models/CustomErrors.enum';
import { AuthenticationActions } from './authentication.actions';

export interface AuthenticationState extends FireAuthState {
  uid: string;
  action: AuthenticationActions;
  error: DbErrors | CustomErrors;
}
export function initializeAuthenticationState(): AuthenticationState {
  return {
    uid: null,
    action: null,
    emailVerified: false,
    error: null,
    loading: false,
    profile: null,
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'auth' })
export class AuthenticationStore extends Store<AuthenticationState> {
  constructor() {
    super(initializeAuthenticationState());
  }
}
