import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-recover-password-success',
  templateUrl: './recover-password-success.component.html',
  styleUrls: ['./recover-password-success.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecoverPasswordSuccessComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
