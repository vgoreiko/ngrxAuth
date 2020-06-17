import {Action, createReducer, on} from '@ngrx/store';
import {LoadingState} from '../../dto';
import * as authActions from '../actions';
import {LoadingStateBase, recoverPasswordInitialState, initialState} from '../auth-state.dto';

const reducer = createReducer(recoverPasswordInitialState,
  on(authActions.recoverPassword, state => ({
    ...state,
    loading: LoadingState.Loading,
    error: null
  })),
  on(authActions.recoverPasswordError, (state, action) => ({
    ...state,
    loading: LoadingState.Failed,
    error: action.error
  })),
  on(authActions.recoverPasswordSuccess, (state, action) => ({
    ...state,
    loading: LoadingState.Loaded,
    error: null
  })),
  on(authActions.logout, authActions.reset, (state, action) => ({
    ...recoverPasswordInitialState
  }))
);

export function recoverPasswordReducer(state: LoadingStateBase, action: Action) {
  return reducer(state, action);
}
