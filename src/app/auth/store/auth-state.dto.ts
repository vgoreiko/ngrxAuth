import {LoadingState, UserDto} from "../dto";
import {AppStateDto} from "../../store/app-state.dto";
import {createFeatureSelector} from "@ngrx/store";

export class LoadingStateBase {
  loading: LoadingState;
  error: string;
}

export interface LoginState extends LoadingStateBase{
  user: UserDto;
}

export interface RecoverPasswordState extends LoadingStateBase {
}

export interface CreateAccountState extends LoadingStateBase {
}

export interface AuthState extends AppStateDto {
  login: LoginState
  recoverPassword: RecoverPasswordState
  createAccount: CreateAccountState
}

export const loginInitialState: LoginState = {
  user: UserDto.empty(),
  loading: LoadingState.NotStarted,
  error: null,
}

export const recoverPasswordInitialState: RecoverPasswordState = {
  loading: LoadingState.NotStarted,
  error: null
}

export const createAccountInitialState: RecoverPasswordState = {
  loading: LoadingState.NotStarted,
  error: null
}

export const initialState: AuthState = {
  login: loginInitialState,
  recoverPassword: recoverPasswordInitialState,
  createAccount: createAccountInitialState
}

export const selectAuthFeature = createFeatureSelector<AuthState>('auth');
