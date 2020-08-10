import { NgModule, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationDataService } from './state/authentication/authentication-data.service';
import { Subscription } from 'rxjs';
import { AuthenticationActionsHandler } from './state/authentication/authentication.actions';

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class CoreModule implements OnDestroy {
  private subcriptions: Subscription = new Subscription();
  constructor(
    private authActionsHandler: AuthenticationActionsHandler,
    private authDataService: AuthenticationDataService
  ) {
    this.subcriptions.add(authDataService.sync().subscribe());
  }
  ngOnDestroy() {
    this.subcriptions.unsubscribe();
  }
}
