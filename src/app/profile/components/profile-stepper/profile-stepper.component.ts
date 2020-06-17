import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {StepDto} from '../../dto';

@Component({
  selector: 'app-profile-stepper',
  templateUrl: './profile-stepper.component.html',
  styleUrls: ['./profile-stepper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileStepperComponent implements OnInit {
  @Input() steps: StepDto[] = [];
  @Input() activeStepId: number;
  @Input() successStepIds: number[] = [];
  @Input() isNextDisabled = false;

  ngOnInit(): void {
  }

  isStepSuccess(stepId: number) {
    return this.successStepIds.includes(stepId);
  }

  isStepActive(stepId: number) {
    return this.activeStepId === stepId;
  }
}
