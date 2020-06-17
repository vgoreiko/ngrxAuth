import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProfileRoutingModule} from './profile-routing.module';
import {DictionaryModule} from "../dictionary/dictionary.module";
import {SetupProfileComponent} from "./contrainers";
import {
  BioDetailsComponent,
  ProfileAddressComponent,
  ProfilePictureComponent,
  ProfileSecurityComponent,
  ProfileStepperComponent
} from "./components";
import {ProfileFacadeService} from "./services";


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
  ],
  providers: [
    ProfileFacadeService
  ]
})
export class ProfileModule {
}
