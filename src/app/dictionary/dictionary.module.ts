import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {DictionarySandboxService} from './store/dictionary-sandbox.service';
import {DictionaryRepositoryService} from './services';
import * as fromReducers from './store/reducers';
import {CountryEffects} from './store/effects';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature('dictionary', fromReducers.reducers),
    EffectsModule.forFeature([CountryEffects])
  ],
  providers: [
    DictionaryRepositoryService,
    DictionarySandboxService
  ]
})
export class DictionaryModule { }
