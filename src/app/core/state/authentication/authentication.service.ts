import { Injectable } from '@angular/core';
import { AuthenticationStore } from './authentication.store';
import { AuthenticationDataService } from './authentication-data.service';
import { DbErrors } from '../../models/DbError.enum';
import { CustomErrors } from '../../models/CustomErrors.enum';
import { AuthenticationActions } from './authentication.actions';
import { CollectionConfig } from 'akita-ng-fire';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  constructor(
    private store: AuthenticationStore,
    private authData: AuthenticationDataService
  ) {}

  updateError(error: DbErrors | CustomErrors) {
    this.store.update({ error });
  }

  updateAction(action: AuthenticationActions) {
    this.store.update({ action });
  }

  logout(): Promise<void> {
    return this.authData.logout();
  }

  login({ email, password }): Promise<firebase.auth.UserCredential> {
    return this.authData.login(email, password);
  }
}
