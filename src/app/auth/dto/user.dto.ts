export class UserDto {
  id: number
  userName: string
  email: string

  static empty() {
    return {
      id: null,
      userName: null,
      email: null
    }
  }
}
