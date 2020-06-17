import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as loginActions from '../actions';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {AuthRepositoryService} from '../../services';
import {of} from 'rxjs';
import {Router} from '@angular/router';

@Injectable()
export class LoginEffects {

  login$ = createEffect(() => this.actions$.pipe(
    ofType(loginActions.login),
    switchMap(action => this.authRepositoryService.login({
      userName: action.userName,
      password: action.password
    }).pipe(
        map(user => (loginActions.loginSuccess({user}))),
        catchError((e) => {
          return of(loginActions.loginError({error: e.error.message}));
        })
      ))
    )
  );

  loginSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(loginActions.loginSuccess),
    map(action => this.router.navigate(['/setupProfile']))),
    {
      dispatch: false
    }
  );

  logout$ = createEffect(() => this.actions$.pipe(
    ofType(loginActions.logout),
    switchMap(_ => this.authRepositoryService.logout().pipe(
      map(resp => this.router.navigate(['/auth/login'])),
      catchError(e => this.router.navigate(['/auth/login']))
    ))
    ),
    {dispatch: false}
  );

  constructor(
    private actions$: Actions,
    private authRepositoryService: AuthRepositoryService,
    private router: Router
  ) {}
}
