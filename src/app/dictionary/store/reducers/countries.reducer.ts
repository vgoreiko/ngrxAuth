import {Action, createReducer, on} from '@ngrx/store';
import * as countryActions from '../actions';
import {CountriesStateDto, initialCountriesState} from '../dictionary-state.dto';
import {LoadingState} from '../../../shared/dto';

const reducer = createReducer(initialCountriesState,
  on(countryActions.loadCountries, state => ({
    ...state,
    loading: LoadingState.Loading,
    error: null
  })),
  on(countryActions.loadCountriesError, (state, action) => ({
    ...state,
    loading: LoadingState.Failed,
    error: action.error
  })),
  on(countryActions.loadCountriesSuccess, (state, action) => ({
    ...state,
    loading: LoadingState.Loaded,
    error: null,
    countries: action.countries
  })),
);

export function countriesReducer(state: CountriesStateDto, action: Action) {
  return reducer(state, action);
}
