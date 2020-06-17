import {createSelector} from '@ngrx/store';
import {LoadingState} from '../../dto';
import {AuthState, LoginState, selectAuthFeature} from '../auth-state.dto';

export const selectLoginState = createSelector(selectAuthFeature,
  (state: AuthState) => state.login
);
export const selectAuthUser = createSelector(selectLoginState,
  (state: LoginState) => state.user
);
export const selectAuthLoggedIn = createSelector(selectLoginState,
  (state: LoginState) => state.loading === LoadingState.Loaded
);
export const selectAuthLoginError = createSelector(selectLoginState,
  (state: LoginState) => state.error
);
export const selectAuthLoginInProgress = createSelector(selectLoginState,
  (state: LoginState) => state.loading === LoadingState.Loading
);
