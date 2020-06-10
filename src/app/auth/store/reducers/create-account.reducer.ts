import {Action, createReducer, on} from '@ngrx/store';
import {LoadingState} from "../../dto";
import * as authActions from '../actions';
import {createAccountInitialState, CreateAccountState} from "../auth-state.dto";

const reducer = createReducer(createAccountInitialState,
  on(authActions.createAccount, state => ({
    ...state,
    loading: LoadingState.Loading,
    error: null
  })),
  on(authActions.createAccountError, (state, action) => ({
    ...state,
    loading: LoadingState.Failed,
    error: action.error
  })),
  on(authActions.createAccountSuccess, (state, action) => ({
    ...state,
    loading: LoadingState.Loaded,
    error: null
  }))
)

export function createAccountReducer(state: CreateAccountState, action: Action) {
  return reducer(state, action)
}
