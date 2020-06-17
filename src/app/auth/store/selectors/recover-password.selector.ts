import {createSelector} from '@ngrx/store';
import {LoadingState} from '../../dto';
import {AuthState, LoadingStateBase, selectAuthFeature} from '../auth-state.dto';

export const selectRecoverPasswordState = createSelector(selectAuthFeature,
  (state: AuthState) => state.recoverPassword
);
export const selectRecoverPasswordSuccess = createSelector(selectRecoverPasswordState,
  (state: LoadingStateBase) => state.loading === LoadingState.Loaded
);
export const selectRecoverPasswordError = createSelector(selectRecoverPasswordState,
  (state: LoadingStateBase) => state.error
);
export const selectRecoverPasswordInProgress = createSelector(selectRecoverPasswordState,
  (state: LoadingStateBase) => state.loading === LoadingState.Loading
);
