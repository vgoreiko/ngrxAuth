import {Body, Controller, Get, HttpCode, HttpException, HttpStatus, Post} from '@nestjs/common';
import {AppService} from './app.service';
import {LoginDto} from "../dto/login";

@Controller("api")
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Post("login")
  @HttpCode(200)
  login(@Body() authData: LoginDto) {
    const valid = this.appService.areCredentialsValid(authData)
    if (!valid) {
      throw new HttpException('UNAUTHORIZED, Wrong Credentials', HttpStatus.UNAUTHORIZED)
    }
    return {}
  }
}
