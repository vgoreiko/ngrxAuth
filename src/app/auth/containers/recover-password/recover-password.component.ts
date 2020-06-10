import {Component} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.scss']
})
export class RecoverPasswordComponent {
  usernameOrEmail: ''

  submit(f: NgForm) {
    if (f.valid) {
      f.reset()
    }
  }
}
