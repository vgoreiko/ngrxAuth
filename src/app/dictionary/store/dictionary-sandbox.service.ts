import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import * as dictionarySelectors from './selectors';
import {DictionaryStateDto} from './dictionary-state.dto';
import {CountryDto} from '../dto';
import {loadCountries} from './actions';

@Injectable()
export class DictionarySandboxService {
  loadCountriesError$: Observable<string> = this.store.pipe(select(dictionarySelectors.selectCountriesLoadError));
  loadCountriesInProgress$: Observable<boolean> = this.store.pipe(select(dictionarySelectors.selectCountriesLoadInProgress));
  loadCountriesSuccess$: Observable<boolean> = this.store.pipe(select(dictionarySelectors.selectCountriesLoaded));
  countries$: Observable<CountryDto[]> = this.store.pipe(select(dictionarySelectors.selectCountries));

  constructor(private store: Store<DictionaryStateDto>) {
  }

  getAllCountries() {
    this.store.dispatch(loadCountries());
  }
}
