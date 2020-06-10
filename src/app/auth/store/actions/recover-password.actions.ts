import {createAction, props} from "@ngrx/store";

export const recoverPassword = createAction(
  '[Auth] Recover Password',
  props<{ userName: string }>()
);
export const recoverPasswordSuccess = createAction(
  '[Auth] Recover Password Success'
);
export const recoverPasswordError = createAction(
  '[Auth] Recover Password Error',
  props<{ error: string }>()
);
