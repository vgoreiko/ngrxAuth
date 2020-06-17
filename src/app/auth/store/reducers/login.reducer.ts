import {Action, createReducer, on} from '@ngrx/store';
import {LoadingState} from '../../dto';
import * as authActions from '../actions';
import {loginInitialState, LoginState} from '../auth-state.dto';

const reducer = createReducer(loginInitialState,
  on(authActions.login, state => ({
    ...state,
    loading: LoadingState.Loading,
    error: null
  })),
  on(authActions.loginError, (state, action) => ({
    ...state,
    loading: LoadingState.Failed,
    error: action.error
  })),
  on(authActions.loginSuccess, authActions.createAccountSuccess, (state, action) => ({
    ...state,
    loading: LoadingState.Loaded,
    error: null,
    user: action.user
  })),
  on(authActions.logout, authActions.reset, (state, action) => ({
    ...loginInitialState
  }))
);

export function loginReducer(state: LoginState, action: Action) {
  return reducer(state, action);
}
