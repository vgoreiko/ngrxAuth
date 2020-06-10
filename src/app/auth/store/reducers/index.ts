import {loginReducer} from "./login.reducer";
import {recoverPasswordReducer} from "./recover-password.reducer";
import {createAccountReducer} from "./create-account.reducer";

export * from "./login.reducer";
export * from "./recover-password.reducer";
export * from "./create-account.reducer";

export const reducers = {
  login: loginReducer,
  recoverPassword: recoverPasswordReducer,
  createAccount: createAccountReducer
}
