import {createAction, props} from "@ngrx/store";
import {CountryDto} from "../../dto";

export const loadCountries = createAction(
  '[Dictionary] Load Countries'
);
export const loadCountriesSuccess = createAction(
  '[Dictionary] Load Countries Success',
  props<{ countries: CountryDto[] }>()
);
export const loadCountriesError = createAction(
  '[Dictionary] Load Countries Error',
  props<{ error: string }>()
);
