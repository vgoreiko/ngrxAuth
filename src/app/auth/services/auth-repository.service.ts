import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginDto, UserBioDto, UserDto} from '../dto';
import {APP_CONFIG, AppConfig} from '../../app-config/app-config.module';

@Injectable()
export class AuthRepositoryService {
  constructor(private http: HttpClient,
              @Inject(APP_CONFIG) private config: AppConfig) {
  }

  login(credential: LoginDto) {
    return this.http.post<UserDto>(`${this.apiPredecessor}/login`, credential);
  }

  logout() {
    return this.http.post(`${this.apiPredecessor}/logout`, {});
  }

  recoverPassword(userName: string) {
    return this.http.post(`${this.apiPredecessor}/recover`, {term: userName});
  }

  createAccount(credential: LoginDto) {
    return this.http.post<UserDto>(`${this.apiPredecessor}/users`, {userName: credential.userName, password: credential.password, email: `${credential.userName}@gmail.com`});
  }

  get apiPredecessor() {
    return `${this.config.apiEndpoint}`;
  }
}
