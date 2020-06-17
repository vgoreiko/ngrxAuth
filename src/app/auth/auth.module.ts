import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";

import {AuthRoutingModule} from './auth-routing.module';
import {
  LogInComponent,
  RecoverPasswordComponent,
  CreateAccountComponent,
  AuthComponent,
  CreateAccountSuccessComponent,
} from './containers';
import {
  RecoverPasswordSuccessComponent,
  SuccessMessageComponent
} from './components';
import {AuthRepositoryService} from "./services";
import * as fromReducers from "./store/reducers";
import {CreateAccountEffects, GlobalEffects, LoginEffects, RecoverPasswordEffects} from "./store/effects";
import {AuthSandboxService} from "./store/auth-sandbox.service";

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
    HttpClientModule,
    StoreModule.forFeature('auth', fromReducers.reducers),
    EffectsModule.forFeature([LoginEffects, RecoverPasswordEffects, GlobalEffects, CreateAccountEffects])
  ],
  providers: [
    AuthRepositoryService,
    AuthSandboxService
  ]
})
export class AuthModule {
}
