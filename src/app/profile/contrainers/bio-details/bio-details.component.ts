import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

import {UserBioDto} from '../../../auth/dto';
import {ProfileFormBuilderService, UserBioDetailsControlNames} from '../../services';

@Component({
  selector: 'app-bio-details',
  templateUrl: './bio-details.component.html',
  styleUrls: ['./bio-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BioDetailsComponent implements OnInit {
  @Input() bioDetails: UserBioDto;
  controlNames = UserBioDetailsControlNames;
  bioDetailsGroup: FormGroup = this.profileFormBuilderService.getBioDetailsForm();

  constructor(private profileFormBuilderService: ProfileFormBuilderService) { }

  ngOnInit(): void {
  }

  get firstNameControl() {
    return this.bioDetailsGroup.get(this.controlNames.FirstName);
  }

  get lastNameControl() {
    return this.bioDetailsGroup.get(this.controlNames.LastName);
  }

  get phoneNumberControl() {
    return this.bioDetailsGroup.get(this.controlNames.PhoneNumber);
  }
}
