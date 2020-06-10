import {createAction, props} from "@ngrx/store";
import {LoginDto, UserDto} from "../../dto";

export const createAccount = createAction(
  '[Auth] Create Account',
  props<LoginDto>()
);
export const createAccountSuccess = createAction(
  '[Auth] Create Account Success',
  props<{ user: UserDto }>()
);
export const createAccountError = createAction(
  '[Auth] Create Account Error',
  props<{ error: string }>()
);
