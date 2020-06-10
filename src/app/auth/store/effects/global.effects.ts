import {Injectable} from "@angular/core";
import {switchMap} from "rxjs/operators";
import {pipe} from "rxjs";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import * as globalActions from "../actions"

import {AuthRepositoryService} from "../../services";
import {Router} from "@angular/router";

@Injectable()
export class GlobalEffects {

  reset$ = createEffect(() => this.actions$.pipe(
    ofType(globalActions.reset),
    pipe(
      switchMap(_ => this.router.navigate(["/auth/login"]))
    )
    ), {dispatch: false}
  );

  constructor(
    private actions$: Actions,
    private authRepositoryService: AuthRepositoryService,
    private router: Router
  ) {}
}
