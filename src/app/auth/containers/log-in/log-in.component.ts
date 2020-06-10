import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {AccountFormService, LoginFormControlNames} from "../../services";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
  viewProviders: [AccountFormService]
})
export class LogInComponent implements OnInit {
  loginForm: FormGroup
  controlNames = LoginFormControlNames

  constructor(private logInFormService: AccountFormService,
              private http: HttpClient) {
    this.loginForm = this.logInFormService.generateLoginForm()
  }

  ngOnInit() {
    return this.http.get('api/users').subscribe()
  }

  login() {
    const userName = this.loginForm.get(LoginFormControlNames.UserName).value
    const password = this.loginForm.get(LoginFormControlNames.Password).value
    return this.http.post('api/login', {userName, password}).subscribe()
  }
}
