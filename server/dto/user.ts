import { InMemoryDBEntity } from '@nestjs-addons/in-memory-db';

export interface UserDto extends InMemoryDBEntity {
  id: number,
  userName: string,
  password: string,
  email: string
}
