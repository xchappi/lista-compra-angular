import { Injectable } from '@angular/core';
import {
  AuthenticationStore,
  AuthenticationState,
} from './authentication.store';
import { FireAuthService, CollectionConfig } from 'akita-ng-fire';

@Injectable({ providedIn: 'root' })
@CollectionConfig({ path: 'users' })
export class AuthenticationDataService extends FireAuthService<
  AuthenticationState
> {
  // formatFromFirestore = createProfile;

  constructor(store: AuthenticationStore) {
    super(store);
  }

  logout(): Promise<void> {
    return super.signOut();
  }

  login(email: string, password: string) {
    return this.signin(email, password);
  }
}
