import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { AuthenticationService } from '../core/state/authentication/authentication.service';
import { AuthenticationActions } from '../core/state/authentication/authentication.actions';
import { AuthenticationQuery } from '../core/state/authentication/authentication.query';
import { startWith, first, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private service: AuthenticationService,
    private query: AuthenticationQuery
  ) {}
  loginForm = this.fb.group({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {}
  login() {
    this.service.login(this.loginForm.value).then(
      (success) => {
        this.query.isLoggedIn$
          .pipe(
            takeWhile((isLoggedIn) => isLoggedIn === true),
            first()
          )
          .subscribe((isLoading) => {
            this.service.updateAction(AuthenticationActions.LOGIN_SUCCESS);
          });
      },
      (error) => {
        alert(error.code);
      }
    );
  }
}
