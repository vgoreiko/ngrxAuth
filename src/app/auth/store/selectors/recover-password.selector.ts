import {createSelector} from "@ngrx/store";
import {LoadingState} from "../../dto";
import {AuthState, RecoverPasswordState, selectAuthFeature} from "../auth-state.dto";

export const selectRecoverPasswordState = createSelector(selectAuthFeature,
  (state: AuthState) => state.recoverPassword
)
export const selectRecoverPasswordSuccess = createSelector(selectRecoverPasswordState,
  (state: RecoverPasswordState) => state.loading === LoadingState.Loaded
)
export const selectRecoverPasswordError = createSelector(selectRecoverPasswordState,
  (state: RecoverPasswordState) => state.error
)
export const selectRecoverPasswordInProgress = createSelector(selectRecoverPasswordState,
  (state: RecoverPasswordState) => state.loading === LoadingState.Loading
)
