import {createAction, props} from '@ngrx/store';
import {UserProfileDto} from '../../dto';

export const loadUserProfile = createAction(
  '[User Profile] Load',
  props<{ userName: string }>()
);
export const loadUserProfileSuccess = createAction(
  '[User Profile] Load Success',
  props<{user: Partial<UserProfileDto>}>()
);
export const loadUserProfileError = createAction(
  '[User Profile] Load Error',
  props<{ error: string }>()
);
