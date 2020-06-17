import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-terms-of-services',
  templateUrl: './terms-of-services.component.html',
  styleUrls: ['./terms-of-services.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TermsOfServicesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
