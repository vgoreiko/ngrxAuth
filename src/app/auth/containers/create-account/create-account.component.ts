import {Component, OnInit} from '@angular/core';
import {AccountFormService, CreateAccountFormControlNames} from "../../services/account-form";
import {FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss'],
  viewProviders: [AccountFormService]
})
export class CreateAccountComponent {
  createAccountForm: FormGroup
  controlNames = CreateAccountFormControlNames

  constructor(private accountFormService: AccountFormService,
              private router: Router,
              private http: HttpClient) {
    this.createAccountForm = this.accountFormService.generateCreateAccountForm()
  }

  submit() {
    if(this.createAccountForm.valid) {
      const userName = this.userNameControl.value
      const password = this.passwordControl.value
      this.http.post("/api/user", {userName, password, email: `${userName}@gmail.com`}).subscribe()
      return this.router.navigate(['/auth/createSuccess'])
    }
  }

  get passwordsGroup(): FormGroup {
    return this.createAccountForm.get(this.controlNames.PasswordFormGroup) as FormGroup
  }

  get passwordControl() {
    return this.passwordsGroup.get(this.controlNames.Password)
  }

  get confirmPasswordControl() {
    return this.passwordsGroup.get(this.controlNames.ConfirmPassword)
  }

  get userNameControl() {
    return this.createAccountForm.get(this.controlNames.UserName)
  }

  get hasErrorsPasswordControl() {
    return !this.passwordControl.valid
  }

  get hasErrorsConfirmPasswordControl() {
    return !this.confirmPasswordControl.valid
  }

  get hasErrorsUserNameControl() {
    return !this.userNameControl.valid
  }

}
