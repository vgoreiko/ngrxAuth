import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {ProfileRoutingModule} from './profile-routing.module';
import {DictionaryModule} from '../dictionary/dictionary.module';
import {
  SetupProfileComponent,
  BioDetailsComponent,
  ProfileAddressComponent,
  ProfilePictureComponent,
  ProfileSecurityComponent,
} from './contrainers';
import {
  ProfileStepperComponent
} from './components';
import {
  ProfileFacadeService,
  ProfileFormBuilderService
} from './services';


@NgModule({
  declarations: [
    SetupProfileComponent,
    BioDetailsComponent,
    ProfilePictureComponent,
    ProfileAddressComponent,
    ProfileSecurityComponent,
    ProfileStepperComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    DictionaryModule,
    ReactiveFormsModule,
  ],
  providers: [
    ProfileFacadeService,
    ProfileFormBuilderService
  ]
})
export class ProfileModule {
}
