import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {LoginDto, UserBioDto, UserDto} from "../dto";

@Injectable()
export class AuthRepositoryService {
  constructor(private http: HttpClient) {

  }

  login(credential: LoginDto) {
    return this.http.post<UserDto>("/api/login", credential)
  }

  logout() {
    return this.http.post("/api/logout", {})
  }

  recoverPassword(userName: string) {
    return this.http.post('/api/recover', {term: userName})
  }

  createAccount(credential: LoginDto) {
    return this.http.post<UserDto>("/api/user", {userName: credential.userName, password: credential.password, email: `${credential.userName}@gmail.com`})
  }

  updateUserBioDetails(userBio: UserBioDto) {
    return this.http.post("/api/userBio", {userBio})
  }
}
