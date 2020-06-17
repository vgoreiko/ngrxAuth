import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SetupProfileComponent,
  BioDetailsComponent,
  ProfileAddressComponent,
  ProfilePictureComponent,
  ProfileSecurityComponent
} from './contrainers';


const routes: Routes = [{
  path: '',
  component: SetupProfileComponent,
  children: [
    {
      path: 'bioDetails',
      component: BioDetailsComponent,
    },
    {
      path: 'picture',
      component: ProfilePictureComponent,
    },
    {
      path: 'address',
      component: ProfileAddressComponent,
    },
    {
      path: 'security',
      component: ProfileSecurityComponent,
    },
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'bioDetails'
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
