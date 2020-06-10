import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {AuthRoutingModule} from './auth-routing.module';
import {
  LogInComponent,
  RecoverPasswordComponent,
  CreateAccountComponent,
  CreateAccountSuccessComponent,
  AuthComponent,
  RecoverPasswordSuccessComponent,
} from './containers';
import { SuccessMessageComponent } from './components';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    LogInComponent,
    RecoverPasswordComponent,
    CreateAccountComponent,
    CreateAccountSuccessComponent,
    AuthComponent,
    SuccessMessageComponent,
    RecoverPasswordSuccessComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [

  ]
})
export class AuthModule {
}
