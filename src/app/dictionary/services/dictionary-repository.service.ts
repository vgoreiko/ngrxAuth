import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CountryDto} from '../dto';
import {APP_CONFIG, AppConfig} from '../../app-config/app-config.module';

@Injectable()
export class DictionaryRepositoryService {
  constructor(private http: HttpClient,
              @Inject(APP_CONFIG) private config: AppConfig) {

  }
  getCountries() {
    return this.http.get<CountryDto[]>(`${this.apiPredecessor}/countries`);
  }

  get apiPredecessor() {
    return `${this.config.apiEndpoint}`;
  }
}
