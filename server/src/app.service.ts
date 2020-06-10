import { Injectable } from '@nestjs/common';
import {users} from "../responses/users";
import {LoginDto} from "../dto/login";

@Injectable()
export class AppService {
  getUsers() {
    return users
  }

  areCredentialsValid(credentials: LoginDto): boolean {
    const user = users.find(user => user.userName === credentials.userName)
    return user ? user.password === credentials.password : false
  }
}
