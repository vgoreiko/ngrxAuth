import {LoadingState, UserDto} from '../dto';
import {AppStateDto} from '../../store/app-state.dto';
import {createFeatureSelector} from '@ngrx/store';

export interface LoadingStateBase {
  loading: LoadingState;
  error: string;
}

export interface LoginState extends LoadingStateBase {
  user: UserDto;
}

export interface AuthState extends AppStateDto {
  login: LoginState;
  recoverPassword: LoadingStateBase;
  createAccount: LoadingStateBase;
}

export const loginInitialState: LoginState = {
  user: UserDto.empty(),
  loading: LoadingState.NotStarted,
  error: null,
};

export const recoverPasswordInitialState: LoadingStateBase = {
  loading: LoadingState.NotStarted,
  error: null
};

export const createAccountInitialState: LoadingStateBase = {
  loading: LoadingState.NotStarted,
  error: null
};

export const initialState: AuthState = {
  login: loginInitialState,
  recoverPassword: recoverPasswordInitialState,
  createAccount: createAccountInitialState
};

export const selectAuthFeature = createFeatureSelector<AuthState>('auth');
