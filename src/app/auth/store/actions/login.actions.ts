import {createAction, props} from "@ngrx/store";
import {UserDto} from "../../dto";

export const login = createAction(
  '[Auth] LogIn',
  props<{ userName: string, password: string }>()
);
export const loginSuccess = createAction(
  '[Auth] LogIn Success',
  props<{ user: UserDto }>()
);
export const loginError = createAction(
  '[Auth] LogIn Error',
  props<{ error: string }>()
);
export const logout = createAction(
  '[Auth] Logout'
)
