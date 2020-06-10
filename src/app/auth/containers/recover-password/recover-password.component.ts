import {Component} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthSandboxService} from "../../store/auth-sandbox.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.scss']
})
export class RecoverPasswordComponent {
  usernameOrEmail: ''
  recoverPasswordSuccess$: Observable<boolean> = this.authSandboxService.recoverPasswordSuccess$
  recoverPasswordError$: Observable<string> = this.authSandboxService.recoverPasswordError$
  constructor(private authSandboxService: AuthSandboxService) {
  }

  submit(f: NgForm) {
    if (f.valid) {
      this.authSandboxService.recoverPassword(this.usernameOrEmail)
    }
  }
}
