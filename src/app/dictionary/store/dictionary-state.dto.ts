import {createFeatureSelector} from "@ngrx/store";
import {LoadingState} from "../../auth/dto";
import {CountryDto} from "../dto/country.dto";
import {AppStateDto} from "../../store/app-state.dto";

export interface CountriesStateDto {
  countries: CountryDto[],
  loading: LoadingState,
  error: string
}

export const initialCountriesState = {
  countries: [],
  loading: LoadingState.NotStarted,
  error: null,
}

export interface DictionaryStateDto extends AppStateDto {
  countries: CountriesStateDto;
}

export const initialState: DictionaryStateDto = {
  countries: initialCountriesState,
}

export const selectDictionaryFeature = createFeatureSelector<DictionaryStateDto>('dictionary');
