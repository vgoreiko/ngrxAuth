import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as authActions from '../actions';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {AuthRepositoryService} from '../../services';
import {of} from 'rxjs';
import {Router} from '@angular/router';

@Injectable()
export class CreateAccountEffects {

  createAccount$ = createEffect(() => this.actions$.pipe(
    ofType(authActions.createAccount),
    switchMap(action => this.authRepositoryService.createAccount({
      userName: action.userName,
      password: action.password
    }).pipe(
        map(user => (authActions.createAccountSuccess({user}))),
        catchError((e) => {
          return of(authActions.createAccountError({error: e.error.message}));
        })
      ))
    )
  );

  createAccountSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(authActions.createAccountSuccess),
    tap(_ => this.router.navigate(['/auth/createSuccess']))
    ), {dispatch: false}
  );

  constructor(
    private actions$: Actions,
    private authRepositoryService: AuthRepositoryService,
    private router: Router
  ) {}
}
