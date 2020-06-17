import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {AuthSandboxService} from '../../store/auth-sandbox.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-account-success',
  templateUrl: './create-account-success.component.html',
  styleUrls: ['./create-account-success.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateAccountSuccessComponent implements OnInit {
  constructor(private authSandboxService: AuthSandboxService,
              private router: Router) { }

  ngOnInit(): void {
  }

  setupProfile() {
    return this.router.navigate(['/setupProfile']);
  }

  logout() {
    this.authSandboxService.logout();
  }
}
