import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {
  AuthComponent,
  CreateAccountComponent,
  CreateAccountSuccessComponent,
  LogInComponent,
  RecoverPasswordComponent, SetupProfileComponent
} from "./containers";


const routes: Routes = [{
  path: '',
  component: AuthComponent,
  children: [
    {
      path: 'create',
      component: CreateAccountComponent
    },
    {
      path: 'createSuccess',
      component: CreateAccountSuccessComponent
    },
    {
      path: 'login',
      component: LogInComponent
    },
    {
      path: 'recoverPassword',
      component: RecoverPasswordComponent
    },
    {
      path: 'setupProfile',
      component: SetupProfileComponent
    },
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'create',
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
