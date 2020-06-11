import {createSelector} from "@ngrx/store";
import {CountriesStateDto, DictionaryStateDto, selectDictionaryFeature} from "../dictionary-state.dto";
import {LoadingState} from "../../../shared/dto";

export const selectCountriesState = createSelector(selectDictionaryFeature,
  (state: DictionaryStateDto) => state.countries
)
export const selectCountries = createSelector(selectCountriesState,
  (state: CountriesStateDto) => state.countries
)
export const selectCountriesLoaded = createSelector(selectCountriesState,
  (state: CountriesStateDto) => state.loading === LoadingState.Loaded
)
export const selectCountriesLoadError = createSelector(selectCountriesState,
  (state: CountriesStateDto) => state.error
)
export const selectCountriesLoadInProgress = createSelector(selectCountriesState,
  (state: CountriesStateDto) => state.loading === LoadingState.Loading
)
