import { Injectable } from '@nestjs/common';
import {users} from "../responses/users";
import {LoginDto} from "../dto/login";
import {UserDto} from "../dto/user";

@Injectable()
export class AppService {
  getUsers() {
    return users
  }

  areCredentialsValid(credentials: LoginDto): UserDto | false {
    const user = users.find(user => user.userName === credentials.userName)
    if(user && user.password === credentials.password) {
      return user
    } else {
      return false
    }
  }
}
