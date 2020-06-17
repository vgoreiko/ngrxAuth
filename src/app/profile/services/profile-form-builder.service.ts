import { Injectable } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {UserBioDetailsControlNames} from './user-bio-details-control-names';

@Injectable()
export class ProfileFormBuilderService {

  constructor(private fb: FormBuilder) { }

  getBioDetailsForm() {
    return this.fb.group({
      [UserBioDetailsControlNames.FirstName]: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      [UserBioDetailsControlNames.LastName]: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      [UserBioDetailsControlNames.PhoneNumber]: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      [UserBioDetailsControlNames.ScreenName]: ['']
    });
  }
}
