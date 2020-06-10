import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';
import {UserController} from "./user.controller";

@Module({
  imports: [InMemoryDBModule.forRoot()],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}
