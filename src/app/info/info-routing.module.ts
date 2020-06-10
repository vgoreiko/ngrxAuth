import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PrivacyPolicyComponent, TermsOfServicesComponent} from "./containers";


const routes: Routes = [
  {
    path: 'termsOfServices',
    component: TermsOfServicesComponent
  },
  {
    path: 'privacyPolicy',
    component: PrivacyPolicyComponent
  },
  {
    path: '',
    redirectTo: 'termsOfServices',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfoRoutingModule {
}
