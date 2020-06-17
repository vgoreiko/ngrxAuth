import {Component, OnInit} from '@angular/core';
import {ProfileFacadeService} from '../../services';
import {StepDto} from '../../dto';

@Component({
  selector: 'app-setup-profile',
  templateUrl: './setup-profile.component.html',
  styleUrls: ['./setup-profile.component.scss']
})
export class SetupProfileComponent implements OnInit {
  steps: StepDto[] = this.profileFacadeService.getSteps();
  activeStepId = 1;
  successStepIds: number[] = [];
  isNextDisabled = true;

  constructor(private profileFacadeService: ProfileFacadeService) {
  }

  ngOnInit(): void {
  }

}
