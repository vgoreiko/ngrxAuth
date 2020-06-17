import { Injectable } from '@angular/core';
import {StepDto} from '../dto';

@Injectable({
  providedIn: 'root'
})
export class ProfileFacadeService {
  constructor() { }

  getSteps(): StepDto[] {
    return [
      {
        id: 1,
        title: '1',
        subTitle: 'Bio Details'
      },
      {
        id: 2,
        title: '2',
        subTitle: 'Profile Picture'
      },
      {
        id: 3,
        title: '3',
        subTitle: 'Address'
      },
      {
        id: 4,
        title: '4',
        subTitle: 'Security'
      }
    ];
  }

}
