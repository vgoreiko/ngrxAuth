import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoRoutingModule } from './info-routing.module';
import { TermsOfServicesComponent, PrivacyPolicyComponent } from './containers';

@NgModule({
  declarations: [TermsOfServicesComponent, PrivacyPolicyComponent],
  imports: [
    CommonModule,
    InfoRoutingModule
  ]
})
export class InfoModule { }
