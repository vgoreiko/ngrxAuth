import {Injectable} from '@angular/core';
import {catchError, delay, map, switchMap} from 'rxjs/operators';
import {of, pipe} from 'rxjs';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as authActions from '../actions';

import {AuthRepositoryService} from '../../services';
import {Router} from '@angular/router';

@Injectable()
export class RecoverPasswordEffects {

  recoverPassword$ = createEffect(() => this.actions$.pipe(
    ofType(authActions.recoverPassword),
    switchMap(action => this.authRepositoryService.recoverPassword(action.userName).pipe(
        map(_ => (authActions.recoverPasswordSuccess())),
        catchError((e) => {
          return of(authActions.recoverPasswordError({error: e.error.message}));
        })
      ))
    )
  );

  recoverPasswordSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(authActions.recoverPasswordSuccess),
      pipe(
        delay(5000),
        switchMap(_ => of(authActions.reset()))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private authRepositoryService: AuthRepositoryService,
    private router: Router
  ) {}
}
