import {Component} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {AccountFormService, LoginFormControlNames} from "../../services";
import {AuthSandboxService} from "../../store/auth-sandbox.service";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
  viewProviders: [AccountFormService]
})
export class LogInComponent {
  loginForm: FormGroup
  controlNames = LoginFormControlNames
  loginError$ = this.authSandboxService.loginError$

  constructor(private logInFormService: AccountFormService,
              private authSandboxService: AuthSandboxService) {
    this.loginForm = this.logInFormService.generateLoginForm()
  }

  login() {
    const userName = this.userNameControl.value
    const password = this.passwordControl.value
    this.authSandboxService.login({userName, password})
  }

  get userNameControl() {
    return this.loginForm.get(LoginFormControlNames.UserName)
  }

  get passwordControl() {
    return this.loginForm.get(LoginFormControlNames.Password)
  }

  get isSignInDisabled() {
    return !(this.userNameControl.value && this.passwordControl.value)
  }
}
