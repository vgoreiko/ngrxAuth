import {Body, Controller, Get, HttpException, HttpStatus, Post} from '@nestjs/common';
import {UserDto} from "../dto/user";
import {InMemoryDBEntityAsyncController, InMemoryDBService} from "@nestjs-addons/in-memory-db";
import {users} from "../responses/users";

@Controller("api")
export class UserController extends InMemoryDBEntityAsyncController<UserDto> {

  constructor(private userService: InMemoryDBService<UserDto>) {
    super(userService)
    this.userService.createMany(users)
  }

  @Get("users")
  getUsers() {
    return this.userService.getAll()
  }

  @Post("user")
  createUser(@Body() user: UserDto) {
    return this.userService.create(user)
  }

  @Post("recover")
  recoverPassword(@Body() param: {term: string}){
    const {term} = param
    const user = this.userService.getAll().find(user =>
      user.userName === term ||
      user.email === term
    )
    if (user) {
      return {}
    } else {
      throw new HttpException('User with such email or userName not found', HttpStatus.NOT_FOUND)
    }
  }
}
