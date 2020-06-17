import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SetupProfileComponent} from './contrainers';
import {
  BioDetailsComponent,
  ProfileAddressComponent,
  ProfilePictureComponent,
  ProfileSecurityComponent
} from './components';


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
