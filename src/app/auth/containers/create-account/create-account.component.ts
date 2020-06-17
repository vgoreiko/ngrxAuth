import {Component} from '@angular/core';
import {AccountFormService, CreateAccountFormControlNames} from '../../services/account-form';
import {FormGroup} from '@angular/forms';
import {AuthSandboxService} from '../../store/auth-sandbox.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss'],
  viewProviders: [AccountFormService]
})
export class CreateAccountComponent {
  createAccountForm: FormGroup;
  controlNames = CreateAccountFormControlNames;

  constructor(private accountFormService: AccountFormService,
              private authSandboxService: AuthSandboxService) {
    this.createAccountForm = this.accountFormService.generateCreateAccountForm();
  }

  submit() {
    if (this.createAccountForm.valid) {
      const userName = this.userNameControl.value;
      const password = this.passwordControl.value;
      this.authSandboxService.createAccount({userName, password});
    }
  }

  get passwordsGroup(): FormGroup {
    return this.createAccountForm.get(this.controlNames.PasswordFormGroup) as FormGroup;
  }

  get passwordControl() {
    return this.passwordsGroup.get(this.controlNames.Password);
  }

  get confirmPasswordControl() {
    return this.passwordsGroup.get(this.controlNames.ConfirmPassword);
  }

  get userNameControl() {
    return this.createAccountForm.get(this.controlNames.UserName);
  }

  get hasErrorsPasswordControl() {
    return !this.passwordControl.valid;
  }

  get hasPasswordsMatchError() {
    return this.passwordsGroup.hasError('validSameValues');
  }

  get hasErrorsUserNameControl() {
    return !this.userNameControl.valid;
  }

}
