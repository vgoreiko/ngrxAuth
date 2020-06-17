import {LoginFormControlNames} from './login-form-control-names';

export interface LoginFormParams {
    [LoginFormControlNames.UserName]?: string;
    [LoginFormControlNames.Password]?: string;
    [LoginFormControlNames.RememberMe]?: boolean;
}
