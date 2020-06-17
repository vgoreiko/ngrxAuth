import {Injectable} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginFormControlNames} from './login-form-control-names';
import {LoginFormParams} from './login-form-param.interface';
import {validateNumber} from './has-number.validator';
import {validateCapitalLetter} from './has-capital-letter.validator';
import {CreateAccountFormControlNames} from './create-account-form-control-names';
import {validateSameValue} from './group-same-value.validator';

@Injectable()
export class AccountFormService {
  constructor(private fb: FormBuilder) { }

  generateLoginForm(params?: LoginFormParams): FormGroup {
    const userNameValue = params && params[LoginFormControlNames.UserName] || '';
    const passwordValue = params && params[LoginFormControlNames.Password] || '';
    const rememberMeValue = params && params[LoginFormControlNames.RememberMe] || '';

    return this.fb.group({
      [LoginFormControlNames.UserName]: [userNameValue],
      [LoginFormControlNames.Password]: [passwordValue],
      [LoginFormControlNames.RememberMe]: [rememberMeValue]
    });
  }

  generateCreateAccountForm(): FormGroup {
    return this.fb.group({
      [CreateAccountFormControlNames.UserName]: ['', this.getCreateAccountUserNameValidators()],
      [CreateAccountFormControlNames.PasswordFormGroup]: this.fb.group({
        [CreateAccountFormControlNames.Password]: ['', this.getCreateAccountFormPasswordValidators()],
        [CreateAccountFormControlNames.ConfirmPassword]: ['', this.getCreateAccountFormPasswordValidators()]
      }, {validators: validateSameValue}),
    });
  }

  private getCreateAccountUserNameValidators(): Validators {
    return Validators.compose([
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(100)
    ]);
  }

  private getCreateAccountFormPasswordValidators(): Validators {
    return Validators.compose([
      Validators.required,
      Validators.minLength(8),
      validateNumber,
      validateCapitalLetter
    ]);
  }
}
