import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import * as dictionaryActions from "../actions";
import {catchError, map, switchMap} from "rxjs/operators";
import {DictionaryRepositoryService} from "../../services";
import {of} from "rxjs";

@Injectable()
export class CountryEffects {

  loadCountries$ = createEffect(() => this.actions$.pipe(
    ofType(dictionaryActions.loadCountries),
    switchMap(_ => this.dictionaryRepositoryService.getCountries().pipe(
        map(countries => (dictionaryActions.loadCountriesSuccess({countries}))),
        catchError((e) => {
          return of(dictionaryActions.loadCountriesError({error: e.error.message}))
        })
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private dictionaryRepositoryService: DictionaryRepositoryService
  ) {}
}
