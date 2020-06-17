import {LoginFormControlNames} from './enums/login-form-control-names';

export interface LoginFormParams {
    [LoginFormControlNames.UserName]?: string;
    [LoginFormControlNames.Password]?: string;
    [LoginFormControlNames.RememberMe]?: boolean;
}
