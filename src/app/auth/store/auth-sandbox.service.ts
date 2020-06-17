import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {LoginDto, UserDto} from '../dto';
import {login, recoverPassword, logout, reset, createAccount} from './actions';
import * as authSelectors from './selectors';
import {AuthState} from './auth-state.dto';

@Injectable()
export class AuthSandboxService {
  loginError$: Observable<string> = this.store.pipe(select(authSelectors.selectAuthLoginError));
  loginInProgress$: Observable<boolean> = this.store.pipe(select(authSelectors.selectAuthLoginInProgress));
  loggedIn$: Observable<boolean> = this.store.pipe(select(authSelectors.selectAuthLoggedIn));
  user$: Observable<UserDto> = this.store.pipe(select(authSelectors.selectAuthUser));

  recoverPasswordSuccess$: Observable<boolean> = this.store.pipe(select(authSelectors.selectRecoverPasswordSuccess));
  recoverPasswordError$: Observable<string> = this.store.pipe(select(authSelectors.selectRecoverPasswordError));

  constructor(private store: Store<AuthState>) {
  }

  login(credential: LoginDto) {
    this.store.dispatch(login({...credential}));
  }

  logout() {
    this.store.dispatch(logout());
  }

  recoverPassword(userName: string) {
    this.store.dispatch(recoverPassword({userName}));
  }

  resetAll() {
    this.store.dispatch(reset());
  }

  createAccount(credential: LoginDto) {
    this.store.dispatch(createAccount(credential));
  }
}
